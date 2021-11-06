const withSvgr = require("next-svgr");

module.exports = withSvgr({
  reactStrictMode: false,
  images: {
    domains: ["lh3.googleusercontent.com", "i.imgur.com"],
  },
});
