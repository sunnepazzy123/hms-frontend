/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.icons8.com'], // Add the hostname(s) here
      },
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: '/api/:path*',
          },
        ];
      },
    //   async redirects() {
    //     return [
    //       {
    //         source: '/patients',
    //         destination: '/login',
    //         permanent: false,
    //       },
    //     ];
    // }
}

module.exports = nextConfig
