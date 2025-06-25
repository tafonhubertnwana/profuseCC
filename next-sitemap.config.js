// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://profusecc.ai',
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
      'https://profusecc.ai/sitemap.xml',
    ],
  },
};