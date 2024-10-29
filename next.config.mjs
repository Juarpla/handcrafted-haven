/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com", // Ajusta al dominio que usas para las imágenes
        port: "", // Dejar vacío si no usas un puerto específico
        pathname: "/**", // Permite todas las rutas
      },
      {
        protocol: "https",
        hostname: "*.vercel-storage.com",
      },
    ],
  },
  webpack: config => {
    config.resolve.alias["@"] = path.resolve("src");
    return config;
  },
};

export default nextConfig;
