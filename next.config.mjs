/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/a-propos',
        destination: '/l-entreprise',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

