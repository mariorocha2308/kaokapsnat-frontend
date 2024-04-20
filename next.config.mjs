/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL_SERVERLESS: process.env.API_URL_SERVERLESS,
    WS_URL: process.env.WS_URL,
  },
  images: { 
    remotePatterns: [
      {
        hostname: 'source.boringavatars.com'
      }
    ],
    formats: ["image/webp"],
    dangerouslyAllowSVG: true
  }
};

export default nextConfig;
