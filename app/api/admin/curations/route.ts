import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const title = String(body?.title ?? "").trim();
    const slugInput = String(body?.slug ?? "").trim();
    const coverImageUrl = String(body?.coverImageUrl ?? "").trim();
    const description = String(body?.description ?? "").trim();
    const status = String(body?.status ?? "draft").trim().toLowerCase();
    const publishedAtInput = String(body?.publishedAt ?? "").trim();

    if (!title) {
      return NextResponse.json({ ok: false, error: "Title is required." }, { status: 400 });
    }
    if (!coverImageUrl) {
      return NextResponse.json({ ok: false, error: "Cover image is required." }, { status: 400 });
    }

    if (!["draft", "published", "archived"].includes(status)) {
      return NextResponse.json({ ok: false, error: "Invalid status value." }, { status: 400 });
    }

    const slug = toSlug(slugInput || title);
    if (!slug) {
      return NextResponse.json({ ok: false, error: "A valid slug is required." }, { status: 400 });
    }

    const publishedAt =
      publishedAtInput && !Number.isNaN(Date.parse(publishedAtInput))
        ? new Date(publishedAtInput)
        : status === "published"
          ? new Date()
          : null;

    const curation = await prisma.curation.create({
      data: {
        title,
        slug,
        coverImageUrl,
        description: description || null,
        status: status as "draft" | "published" | "archived",
        publishedAt: status === "published" ? publishedAt : null,
        createdBy: session.sub,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json({ ok: true, id: curation.id }, { status: 201 });
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { ok: false, error: "Slug already exists. Use a different slug." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "Failed to create curation." },
      { status: 500 }
    );
  }
}
