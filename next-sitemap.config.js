// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://profuse-cc.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/404'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin'] },
    ],
    additionalSitemaps: [
      'https://profuse-cc.vercel.app/sitemap.xml',
    ],
  },
};