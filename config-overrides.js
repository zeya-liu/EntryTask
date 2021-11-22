/** @format */

const { override, disableEsLint, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

process.env.GENERATE_SOURCEMAP = 'false'

module.exports = override(
  disableEsLint(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#1DA57A' },
  // }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#1DA57A' // 配置主题颜色；antd提供了其它主题颜色，可根据需要进行切换
      }
    }
  }),
//   addWebpackAlias({
//     '@': resolve('src')
//   })
)
