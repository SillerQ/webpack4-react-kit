const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  projectRoot: PROJECT_ROOT,
  outputPath: path.join(PROJECT_ROOT, 'dist'),
  appEntry: path.join(PROJECT_ROOT, 'src'),

  resolve: {
    modules: [ // 优化模块查找路径
      resolve('src'),
      resolve('node_modules') // 指定node_modules所在位置 当你import第三方模块式 直接从这个路径下搜寻
    ],
    alias: {
      // funs$: resolve('src/util/funs.js')
    },
    extensions: ['.js', '.jsx']
  },
}