const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Adjust this to your actual entry file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // Other loaders (for TypeScript, JS, etc.) go here
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Matches image file types
        use: [
          {
            loader: "file-loader", // You can use "url-loader" as an alternative for smaller images
            options: {
              name: "[name].[hash].[ext]", // This will generate a unique filename for the images
              outputPath: "images/", // Path to store images in the output directory
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"], // Make sure TypeScript and JS files are resolved
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    open: true,
  },
};
