/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    images: {
        domains: ['os.alipayobjects.com'],
    },
}

module.exports = nextConfig
