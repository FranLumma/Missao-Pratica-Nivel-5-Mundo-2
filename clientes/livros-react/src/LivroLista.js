import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import { useEffect, useState } from "react";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        {livro.titulo}
        <div>
          <button className="btn btn-danger" onClick={excluir}>
            Excluir
          </button>
        </div>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td className="d-inline-flex">
        <ul>
          {livro.autores.map((autor, index) => {
            return <li key={index}>{autor}</li>;
          })}
        </ul>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const obterTodos = async () => {
      await controleLivro.obterLivros().then((res) => {
        setLivros(res);
      });
    };
    obterTodos();
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo).then(setCarregado(false));
  };

  return (
    <main className="px-5">
      <h1 className="text-left">Catálogo de Livros</h1>
      <table className="table table-striped text-left">
        <thead className="thead-dark">
          <tr>
            <th className="col-2">Título</th>
            <th className="col-6">Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro
              livro={livro}
              excluir={() => excluir(livro.codigo)}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
