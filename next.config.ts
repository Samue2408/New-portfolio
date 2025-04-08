import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'http://192.168.80.18:3000', // Reemplaza con la IP/puerto correctos
    // Puedes agregar más orígenes si lo necesitas
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-maldonados.vercel.app',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
