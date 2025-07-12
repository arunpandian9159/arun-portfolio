/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    quality: 100,
    formats: ['image/png', 'image/jpeg'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024],
  },
  // Allow cross-origin requests from local network devices
  allowedDevOrigins: [
    '192.168.1.69',
    // Add other local network IPs if needed
  ],
}

export default nextConfig
