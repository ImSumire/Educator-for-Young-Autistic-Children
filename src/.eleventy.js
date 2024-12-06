/* npx @11ty/eleventy --serve */

module.exports = function (config) {
  // Ignore compilation
  config.addPassthroughCopy("assets");

  return {
    dir: {
      input: "pages/",
      includes: "../components/includes",
      layouts: "../components/layouts",
      output: "..",
    },
  };
};
