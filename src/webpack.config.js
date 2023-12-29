const path = require("path");

module.exports = {
    mode: "production", // "production" | "development" | "none"

    // entrypoint
    entry: path.join(__dirname, "./ts/main.ts"),

    output: {
        path: path.join(__dirname, "dist"),
        filename: "sim_local_anesthetics.js",
        publicPath: "/dist/"
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "/"),
            watch: true,
        },
        // hot: "only",
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: true
                        }
                    }],
            },
            {
                test: /\.(png|jpg|gif|svg)/,
                type: "asset/inline",
            }
        ]
    },

    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            ".ts", ".js"
        ]
    }
};

