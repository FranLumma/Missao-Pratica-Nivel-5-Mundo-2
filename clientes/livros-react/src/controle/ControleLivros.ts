import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
  _id: String | null;
  codEditora: Number;
  titulo: String;
  resumo: String;
  autores: String[];
}

class ControleLivro {
  obterLivros = async () => {
    try {
      const res = await fetch(baseURL, { method: "GET" });

      const livrosJson: LivroMongo[] = await res.json();

      const livros = livrosJson.map((livroJson) => {
        return new Livro(
          livroJson._id,
          livroJson.codEditora,
          livroJson.titulo,
          livroJson.resumo,
          livroJson.autores
        );
      });
      return livros;
    } catch (err) {
      console.error("Erro ao obter livros: ", err);
      return [];
    }
  };

  incluir = async (livro: Livro) => {
    try {
      const livroMongo = {
        _id: livro.codigo,
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      };

      const res = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livroMongo),
      });

      const result = await res.json();

      return result.ok;
    } catch (err) {
      console.error("Error ao cadastrar livro: ", err);
      return false;
    }
  };

  excluir = async (codigo: String) => {
    try {
      const res = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });

      const data = await res.json();
      if (res.ok) {
        return data.ok;
      } else {
        throw new Error(`Erro ao excluir livro: ${res.status}`);
      }
    } catch (err) {
      console.error("Erro ao exculir livro: ", err);
      return false;
    }
  };
}

export default ControleLivro;
