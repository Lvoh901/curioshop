import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Place custom keys outside the expected NextConfig shape if needed
  allowedDevOrigins: ['192.168.100.195'],
};

export default nextConfig;
