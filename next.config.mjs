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
      { source: '/faqs', destination: '/faq', permanent: true },
      { source: '/help', destination: '/faq', permanent: true },
      { source: '/cookies', destination: '/cookie-policy', permanent: true },
      { source: '/cookie', destination: '/cookie-policy', permanent: true },
      { source: '/aup', destination: '/acceptable-use', permanent: true },
      { source: '/sla', destination: '/support', permanent: true },
      { source: '/trust', destination: '/legal', permanent: true },
      { source: '/trust-center', destination: '/legal', permanent: true },
      { source: '/editorial', destination: '/editorial-policy', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/register', destination: 'https://core.medishelf.co/auth/register', permanent: false },
      { source: '/signup', destination: 'https://core.medishelf.co/auth/register', permanent: false },
    ];
  },
};

export default nextConfig;
