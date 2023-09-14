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
        port: 3000,
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
      ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            filename: "remoteEntry.js",
            remotes: {
                productpage: "product@http://localhost:3001/remoteEntry.js",
                productdetail: "productid@http://localhost:3002/remoteEntry.js"
            },
            shared: ["react", "react-dom"],
        }),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
        })
      ]  
}