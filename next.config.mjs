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
      { source: '/methodologie', destination: '/etudes-et-travaux', permanent: true },
      { source: '/alliance', destination: '/etudes-et-travaux', permanent: true },
      { source: '/metiers/couverture-etancheite', destination: '/metiers/couverture-metallique', permanent: true },
      { source: '/metiers/bardage-specifique', destination: '/metiers/bardage-metallique', permanent: true },
      { source: '/metiers/isolation-thermique', destination: '/metiers/bardage-metallique', permanent: true },
      { source: '/metiers/toiture-vegetalisee-solaire', destination: '/metiers/etancheite-toiture-terrasse', permanent: true },
      { source: '/devis', destination: '/contact#devis', permanent: true },
      {
        source: '/a-propos',
        destination: '/l-entreprise',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

