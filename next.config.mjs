/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/blog/:slug.html',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/pages/blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/pages/blog.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/pages/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/pages/:path.html',
        destination: '/:path',
        permanent: true,
      },
      {
        source: '/pages/:path',
        destination: '/:path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
