import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/test-portfolio", // Change this to your exact GitHub repo name
    images: {
        unoptimized: true
    }
};

export default nextConfig;
