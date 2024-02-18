/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,

  env: {
    API_TOKEN: process.env.API_TOKEN,
    API_URL: prod ? process.env.API_URL : 'http://localhost:3000'
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `http://localhost:5000/uploads/:path*`
      },
      {
        source: "/api/:path*",
        destination: `http://localhost:5000/api/:path*`
      }
    ]
  }
}

module.exports = nextConfig
