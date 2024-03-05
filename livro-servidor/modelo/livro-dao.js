const Livro = require("./livro-schema");

exports.obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (err) {
    console.error("Error ao obter lista de livros: ", err);
    return [];
  }
};

exports.incluir = async (livro) => {
  try {
    await Livro.create(livro);
  } catch (err) {
    console.error("Error ao obter lista de livros: ", err);
  }
};

exports.excluir = async (codigo) => {
  try {
    await Livro.deleteOne({ _id: codigo });
  } catch (err) {
    console.error("Error ao excluir livro: ", err);
  }
};
