import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Place custom keys outside the expected NextConfig shape if needed
  allowedDevOrigins: ['192.168.0.108'],
};

export default nextConfig;
