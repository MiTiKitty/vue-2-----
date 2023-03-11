const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    // 关闭语法检查
    transpileDependencies: false,
    // 代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        }
    }
})