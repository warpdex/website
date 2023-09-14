'use strict';

module.exports = function(cfg) {
  cfg.addPassthroughCopy({"./public/": "/"});

  return {
    dir: {
      data: "../_data",
      includes: "../_includes",
      input: "src",
      output: "_site"
    },
    pathPrefix: "/"
  };
};
