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

  /*
  rewrites: async () => {
    // In order to support wildcard subdomains with different content, use a "rewrite" to include the host in the path
    return [
      {
        source: '/:path*{/}?',
        has: [
          {
            type: 'host',
            value: '(?<siteHost>.*)',
          },
        ],
        destination: '/site/:siteHost/:path*',
      },
    ];
  },

   */

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co"],
  },
};
