const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = pathName => path.resolve(__dirname, pathName)

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src")
        }
    },
    // less
    plugins: [
        {
            plugin: CracoLessPlugin
        },
    ],
}