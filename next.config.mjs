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
  },
  // Allow cross-origin requests from local network devices
  allowedDevOrigins: [
    '192.168.1.69',
    // Add other local network IPs if needed
  ],
}

export default nextConfig
