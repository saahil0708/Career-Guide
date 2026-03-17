import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "67uzoom719.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
