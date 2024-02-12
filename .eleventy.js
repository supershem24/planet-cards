// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("Card", function(planet, distance){
    return `<section class="cardBackground" id=${planet}>
      <div class=${planet}></div>
      <h2>${planet}</h2>
      <p>${distance}</p>
    </section>`
  })
};