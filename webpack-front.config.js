const path = require("path");
module.exports = {
  target: "web",
  entry: {
    app: ["./src/frontend/main.ts"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle-front.js",
  },
  devServer: {
    publicPath: "",
    contentBase: path.resolve(__dirname, "public"),
    watchContentBase: true,
    compress: true,
    port: 9001,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
};
