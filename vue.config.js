const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    // 关闭语法检查
    transpileDependencies: false,
    // 代理跨域
    devServer: {
        proxy: {
            '/mock': {
                target: 'http://127.0.0.1:4523/m1/2423270-0-3ceac7d7',
                changeOrigin: true,
                pathRewrite: {
                    '^/mock': ''
                }
            },
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            },

        }
    }
})