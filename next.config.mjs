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
  }
};

export default nextConfig;
