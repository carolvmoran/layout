const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Ponto de entrada da sua aplicação
  output: {
    filename: "bundle.js", // Nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), // Diretório de saída
    publicPath: "/",
  },
  mode: "development", // Modo de construção: 'development' ou 'production'
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000, // Porta do servidor de desenvolvimento
    historyApiFallback: true, // Permite que react-router manipule as rotas
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Utiliza o Babel para transpilar código JavaScript
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Carrega arquivos CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Caminho para o arquivo HTML de modelo
    }),
  ],
};
