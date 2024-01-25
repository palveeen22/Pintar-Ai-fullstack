import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
    devServer: {
        port: 3000,
    },
    plugins: [
       new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
                    to: path.join(__dirname, 'dist'),
                },
            ],
        }),
    ],
    entry: {
        main: './src/app/page.tsx',
        'pdf.worker': path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
}