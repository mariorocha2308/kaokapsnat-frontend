/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL_SERVERLESS: process.env.API_URL_SERVERLESS,
  }
};

export default nextConfig;
