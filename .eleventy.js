// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("Card", function(planet){
    return `<section class="cardBackground">
      <div class=${planet}>
        
      </div>
    </section>`
  })
};