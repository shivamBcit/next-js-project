/** @type {import('next').NextConfig} */
// next.config.js

module.exports = {
  webpack: (config) => {
    // Use the ignore-loader for .node files
    config.module.rules.push({
      test: /\.node$/,
      use: "ignore-loader",
    });

    return config;
  },
};
