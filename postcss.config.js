module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-font-magician')({
      variants: {
        'Open Sans Condensed': {
          300: [],
        },
        Esteban: {
          400: [],
        },
        Pridi: {
          200: [],
        },
      },
      foundries: ['google'],
    }),
  ],
};
