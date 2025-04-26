/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**", // Optional: Restrict to specific paths
      },
    ],
  },
};

export default nextConfig;
