import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

export const ADMIN_SESSION_COOKIE = "curio_admin_session";

type AdminSessionPayload = {
  sub: string;
  email: string;
  role: "admin" | "editor" | "viewer";
};

function getJwtSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET ?? process.env.DATABASE_URL;
  if (!secret) {
    throw new Error("Missing ADMIN_SESSION_SECRET or DATABASE_URL.");
  }
  return new TextEncoder().encode(secret);
}

export async function createAdminSessionToken(payload: AdminSessionPayload) {
  return new SignJWT({
    email: payload.email,
    role: payload.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecret());
}

export async function verifyAdminSessionToken(token: string) {
  const result = await jwtVerify(token, getJwtSecret(), {
    algorithms: ["HS256"],
  });
  return result.payload as {
    sub: string;
    email: string;
    role: "admin" | "editor" | "viewer";
  };
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    return await verifyAdminSessionToken(token);
  } catch {
    return null;
  }
}
