const path = require("path");

module.exports = {
  async redirects() {
    return [
      {
        source: '/test',
        destination: 'https://google.com',
        permanent: true,
      },
    ]
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co"],
  },
};
