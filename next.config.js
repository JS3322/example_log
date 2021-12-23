// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true
// }
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/home': { page: '/' },
      '/works': { page: '/works' },
      '/5tudy': { page: '/5tudy' }
    }
  },
}