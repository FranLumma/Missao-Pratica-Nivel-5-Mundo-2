import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Livro from "./modelo/Livro";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

export default function LivroDados() {
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState(String);
  const [resumo, setResumo] = useState(String);
  const [autores, setAutores] = useState(String);
  const [codEditora, setCodEditora] = useState(0);

  const navigate = useNavigate();

  const tratarCombo = (e) => {
    setCodEditora(eval(e.target.value));
  };

  const incluir = (e) => {
    e.preventDefault();

    const novoLivro = new Livro();

    const autoresArr = autores.split("\n");

    novoLivro.codEditora = codEditora;
    novoLivro.titulo = titulo;
    novoLivro.resumo = resumo;
    novoLivro.autores = autoresArr;

    if (!titulo || !resumo || !autores) {
      alert("Campo de dados vazio! \n insira os dados");
    } else {
      controleLivro.incluir(novoLivro).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <main className="text-left">
      <div className="px-5 mx-auto col-11">
        <div>
          <h1>Dados do Livro</h1>
        </div>
        <form className="" onSubmit={(e) => incluir(e)}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <div>
              <input
                className="form-control"
                id="titulo"
                name="titulo"
                type="text"
                onChange={(e) => setTitulo(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="resumo">Resumo</label>
            <div>
              <textarea
                className="form-control"
                id="resumo"
                onChange={(e) => setResumo(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="editora">Editora</label>
            <div>
              <select
                className="form-control form-control-md"
                id="editora"
                onChange={(e) => tratarCombo(e)}
              >
                {opcoes.map((opcao, index) => (
                  <option key={index} value={opcao.value}>
                    {opcao.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="autores">Autores (1 por linha)</label>
            <div>
              <textarea
                className="form-control"
                id="autores"
                onChange={(e) => setAutores(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Salvar Dados"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
