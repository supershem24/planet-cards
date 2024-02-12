// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("Card", function(planet){
    return `<section class="cardBackground" id=${planet}>
      <div class=${planet}>
        <p>Hi, I'm a planet</p>
      </div>
    </section>`
  })
};