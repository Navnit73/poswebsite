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
      {
        source: '/refund-policy',
        destination: '/refundPolicy',
        permanent: true,
      },
      {
        source: '/refundpolicy',
        destination: '/refundPolicy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/tmc',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/tmc',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/casestudy',
        permanent: true,
      },
      {
        source: '/case-study',
        destination: '/casestudy',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/aboutus',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/aboutus',
        permanent: true,
      },
      {
        source: '/trial',
        destination: '/demo',
        permanent: true,
      },
      {
        source: '/pos',
        destination: '/sales',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
