/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    qualities: [75, 90],
  },
  async headers() {
    return [{
      source: '/images/:path*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    }, {
      source: '/hero-frames/new-hero/:variant/:filename',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    }];
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

