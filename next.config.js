const API_KEY = process.env.API_KEY;

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://github.com/JS3322/project_homepage',
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/studylist",
        // destination: `/data/studylist`,
        destination: `https://raw.githubusercontent.com/JS3322/project_homepage/main/public/data/studylist.json`,
      },
      {
        source: "/studysub",
        destination: `https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv`,
      },
      {
        source: "/check/5tudy",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/check/5tudy/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};