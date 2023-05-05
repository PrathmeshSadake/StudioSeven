/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "files.stripe.com"],
  },
};

module.exports = nextConfig;
