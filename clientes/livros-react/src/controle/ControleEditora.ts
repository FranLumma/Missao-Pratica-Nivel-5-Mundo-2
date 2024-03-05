import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: 0,
    nome: "HarperCollins",
  },
  {
    codEditora: 1,
    nome: "Schwarcz S.A.",
  },
  {
    codEditora: 2,
    nome: "Nova Fronteira",
  },
];

class ControleEditora {
  getNomeEditora = (codEditora: number) => {
    const nome = editoras
      .filter((editora) => editora.codEditora === codEditora)
      .map((editora) => editora.nome);
    return nome;
  };

  getEditoras = () => {
    return editoras;
  };
}

export default ControleEditora;
