/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marcommnews.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
