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

  env: {
    themeColors: {
      primary: '#FF5733',
      secondary: '#D73C84',
      primaryBackgroundColor: "linear-gradient(180deg, #232036 15.49%, #3A1D2D 59.56%, #950E4D 99.99%, rgba(149, 14, 77, 0.00) 100%)",

      footerBg: "#950E4D",

      animationBg: "#2F233C",
      textColor: "#D73C84",
      secondarytextColor: "#fff",

      // Add more theme colors as needed
    },
    logoUrl: "/tadawi.uae-png.svg", // dont need to pass public here,
    bgUrl: "/backgorund.png",
  },


  

};



