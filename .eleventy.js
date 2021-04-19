const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addPassthroughCopy("css");

};
