import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_CONSOLE_KEY: process.env.NEXT_PUBLIC_GOOGLE_CONSOLE_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://www.googleapis.com/youtube/v3/:path*`,
      },
    ];
  },
  images: {
    domains: ["yt3.ggpht.com"],
  },
};

export default nextConfig;
