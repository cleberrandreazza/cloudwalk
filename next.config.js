/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  compiler: {
    styledComponents: true
  },
  images: {
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920],
    domains: ['picsum.photos', 'localhost'],
  },
}




