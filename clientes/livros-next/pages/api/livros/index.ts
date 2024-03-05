import ControleLivro from "@/classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const livros = controleLivro.obterLivros();
      
      res.status(200).json(livros);
    } else if (req.method === "POST") {
      const { codigo, codEditora, titulo, resumo, autores } = req.body;
      controleLivro.incluir({ codigo, codEditora, titulo, resumo, autores });

      res.status(200).json({ message: "Livro adicionado com sucesso" });
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (error) {
    res.status(500).json({ message: "exceção ocorrida no servidor" });
  }
};
