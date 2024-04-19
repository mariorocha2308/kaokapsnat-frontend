/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL_SERVERLESS: process.env.API_URL_SERVERLESS,
    WS_URL: process.env.WS_URL,
  }
};

export default nextConfig;
