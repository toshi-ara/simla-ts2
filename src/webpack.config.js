const path = require('path');

module.exports = {
    mode: 'production', // "production" | "development" | "none"

    // entrypoint
    entry: './ts/main.ts',

    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },

    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            '.ts', '.js'
        ]
    }
};

