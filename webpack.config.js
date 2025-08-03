const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[name][ext]' // Для статических файлов
  },
  devServer: {
    host: '0.0.0.0', // Доступ с любого IP (опционально)
    port: 8000,      // Указываем нужный порт
    hot: false,       // Отключаем HMR
    liveReload: false, // Отключаем авто-перезагрузку     // Включение HMR (горячей перезагрузки)
    static: {
      directory: './dist', // Папка с собранными файлами
    },
    allowedHosts: ['portal.dnrtko.ru', '192.168.99.21', 'localhost'],
    client: {
      webSocketURL: {
        hostname: 'localhost',
        port: 8000,
        protocol: 'ws'
      }
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    {
      test: /\.(svg|png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/[name][ext]'  // Сохранит в dist/assets/
      }
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    })
  ]
};