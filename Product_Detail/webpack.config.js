const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist") 
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, "dist"),
        },
        open: true,
        port: 3001,
    },
    module: {
      rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "node_modules"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults",
                                    },
                                ],
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpeg|gif|jpg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.webp$/i,
                use: ["file-loader","webp-loader"],
            },
      ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "product",
            filename: "remoteEntry.js",
            exposes: {
                "./ProductPage": "./src/ProductDetail.js",
            },
            shared: ["react", "react-dom"],
        }),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
        })
      ] 
}