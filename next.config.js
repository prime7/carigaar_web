const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withPlugins(
  [optimizedImages],
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
  })
);
