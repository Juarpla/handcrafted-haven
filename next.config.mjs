/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["placehold.co"],
  },
  webpack: config => {
    config.resolve.alias["@"] = path.resolve("src");
    return config;
  },
};

export default nextConfig;