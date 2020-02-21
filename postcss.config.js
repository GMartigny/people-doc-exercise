const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

const plugins = [
    autoprefixer,
];

if (process.env.NODE_ENV === "production") {
    plugins.push(purgecss({
        content: [
            "./src/**/*.js",
            "./src/**/*.html",
        ],
        whitelistPatterns: [
            /^glyphicon-/,
        ],
    }));
}

module.exports = {
    plugins,
};
