/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/404",
        destination: "/not-found",
        permanent: false,
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**"
      },

      {
        protocol: "https",
        hostname: "next14-setup-umber.vercel.app",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
