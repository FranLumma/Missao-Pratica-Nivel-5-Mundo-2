import ControleEditora from "@/classes/controle/ControleEditora";
import Livro from "@/classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir(): void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
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
      <td>
        <ul>
          {livro.autores.map((autor, index) => {
            return <li key={index}>{autor}</li>;
          })}
        </ul>
      </td>
    </tr>
  );
};
