const path = require("path"); // node modulis dirbti su keliais iki failu
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map", // galima matyti is kurio failo koks kodas atejo
  entry: {
    // kuri faila paims webpack kaip pagrindini
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // isvalom pries tai dist buvusius failus
  },
  module: {
    rules: [
      // css loader
      {
        test: /\.css$/i, // pritaikom .css failam
        use: ["style-loader", "css-loader"], // uzkraunam css
      },
      // babel loader
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/template.html",
      templateParameters: {
        title: "We now know WebPack.",
        mainTitle: "Main title is here",
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
