/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qimage.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
