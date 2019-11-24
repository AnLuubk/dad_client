const path = require('path'); // lấy đường dẫn tuyệt đối của thư mục

const config = {
  test: /\.s[ac]ss$/,
  loaders: [
    require.resolve('style-loader'),
    require.resolve('css-loader'),
    require.resolve('sass-loader')
]
};
module.exports = config;
