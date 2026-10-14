import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www -> primary domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.staywithhostly.com" }],
        destination: "https://staywithhostly.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
