const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        path: resolve(__dirname, "./public"),
    },
    module: {
        rules: [
            { // SASS
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            { // Others
                test: /\.(eot|woff2?|ttf|svg|jpg|webp)$/,
                use: "file-loader",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "People Doc",
            template: "./src/template.html",
            favicon: "./src/assets/favicon.webp",
        }),
    ],
};
