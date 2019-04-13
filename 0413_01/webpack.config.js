

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', // 변경
    path: path.resolve(__dirname, 'dist')  // 절대경로  __dirname:변수
  },
  module:{
      rules:[{
          test:/\.m?js$/,
          exclude:/(node_modulesㅣdist)/,
          user:{
              loader:'babel-loader',
              options:{
                  presets:['@babel/preset-env']
              }
          }
      },
    ]
  }
};