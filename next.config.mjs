/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "mvqxbokxwtxywgeiuqap.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
