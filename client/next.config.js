const withSvgr = require("next-svgr");

module.exports = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
});
