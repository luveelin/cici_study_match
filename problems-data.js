// problems-data.js
// 聚合文件：由各分类数据文件合并导出，供 build.js 通过 require 引入。
// 如需增删/修改题目，请直接编辑对应的 problems-data.<分类>.js，再运行 node build.js。
// 改完后无需重新拆分本文件，build.js 会直接读取这些分类文件。

const problems = [
  ...require('./problems-data.坐标轴几何.js'),
  ...require('./problems-data.几何综合.js'),
  ...require('./problems-data.二次根式.js'),
  ...require('./problems-data.最值问题.js'),
  ...require('./problems-data.函数与统计.js'),
  ...require('./problems-data.勾股数定理.js')
];

module.exports = { problems };
