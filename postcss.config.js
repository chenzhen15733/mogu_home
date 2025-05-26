module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 设计稿宽度
      viewportHeight: 1334, // 设计稿高度，可选
      unitPrecision: 3, // 转换后保留几位小数
      viewportUnit: 'vw', // 转换成的视口单位
      selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
      minPixelValue: 1, // 小于或等于1px不转换
      mediaQuery: false, // 允许在媒体查询中转换
      exclude: [/node_modules/], // 排除 node_modules
    }
  }
} 