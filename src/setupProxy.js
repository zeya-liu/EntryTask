/** @format */

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v2', {
      target: 'http://10.82.14.206:8080', // 配置你要请求的服务器地址（开发）
      // target: 'http://10.82.22.240/:8080', // 配置你要请求的服务器地址（开发 测试）
      // target: 'http://192.168.5.7:32001', // 配置你要请求的服务器地址（release）
      // target: 'http://192.168.210.13:32000', // 配置你要请求的服务器地址（测试）
      // target: 'http://192.168.5.95:32000', // 配置你要请求的服务器地址（稳定）
      changeOrigin: true
    })
  )

  // app.use(
  //   createProxyMiddleware('/v2/user', {
  //     target: 'http://10.82.14.206:8080', // 配置你要请求的服务器地址（开发）
  //     // target: 'http://192.168.5.7:32001', // 配置你要请求的服务器地址（release）
  //     // target: 'http://192.168.210.13:32000', // 配置你要请求的服务器地址（测试）
  //     // target: 'http://192.168.5.95:32000', // 配置你要请求的服务器地址（稳定）
  //     changeOrigin: true
  //   })
  // )
  // app.use(
  //   createProxyMiddleware('/v2/projects', {
  //     target: 'http://10.82.14.206:8080', // 配置你要请求的服务器地址（开发）
  //     // target: 'http://192.168.5.7:32001', // 配置你要请求的服务器地址（release）
  //     // target: 'http://192.168.210.13:32000', // 配置你要请求的服务器地址（测试）
  //     // target: 'http://192.168.5.95:32000', // 配置你要请求的服务器地址（稳定）
  //     changeOrigin: true
  //   })
  // )
  // app.use(
  //   createProxyMiddleware('/v2/datasets', {
  //     target: 'http://10.82.14.206:8080', // 配置你要请求的服务器地址（开发）
  //     // target: 'http://192.168.5.7:32001', // 配置你要请求的服务器地址（release）
  //     // target: 'http://192.168.210.13:32000', // 配置你要请求的服务器地址（测试）
  //     // target: 'http://192.168.5.95:32000', // 配置你要请求的服务器地址（稳定）
  //     changeOrigin: true
  //   })
  // )
  // app.use(
  //   createProxyMiddleware('/v2/labeltasks', {
  //     target: 'http://10.82.14.206:8080', // 配置你要请求的服务器地址（开发）
  //     // target: 'http://192.168.5.7:32001', // 配置你要请求的服务器地址（release）
  //     // target: 'http://192.168.210.13:32000', // 配置你要请求的服务器地址（测试）
  //     // target: 'http://192.168.5.95:32000', // 配置你要请求的服务器地址（稳定）
  //     changeOrigin: true
  //   })
  // )
  // app.use(
  //   createProxyMiddleware('/v2/filesvc', {
  //     target: 'http://10.82.14.206:8082', // 配置你要请求的服务器地址（开发）
  //     // target: 'http://192.168.5.7:32001', // 配置你要请求的服务器地址（release）
  //     // target: 'http://192.168.210.13:32000', // 配置你要请求的服务器地址（测试）
  //     // target: 'http://192.168.5.95:32000', // 配置你要请求的服务器地址（稳定）
  //     changeOrigin: true
  //   })
  // )
}
