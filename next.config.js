const withSvgr = require("next-svgr");

module.exports = withSvgr({
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "i.imgur.com"],
  },
});
