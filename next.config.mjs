/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phpv8.aait-d.com',
        port: '', 
        pathname: '/leak_detection/public/storage/images/**', 
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '', 
        pathname: '/w320/**', 
      }
    ],
  },
};

export default nextConfig;
