const PurgeCSS = require('purgecss');

const purge = new PurgeCSS({
  content: ['./**/*.vue', './**/*.html'],
  css: ['./assets/**/*.css'],
});

purge.purge().then(result => {
  // Save or process the result CSS
});
