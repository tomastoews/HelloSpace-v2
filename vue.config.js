module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/hellospace/'
    : '/',
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
}