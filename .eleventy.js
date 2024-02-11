// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("Card", function(){
    <div class="cardBackground">
      <p>Hi, this is a card</p>
    </div>
  })
};