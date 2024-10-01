/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
}

module.exports = nextConfig
