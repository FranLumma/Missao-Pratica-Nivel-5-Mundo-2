import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const codEditora: number = Number(req.query.codEditora);
      const nomeEditora = controleEditora.getNomeEditora(codEditora);

      res.status(200).json(nomeEditora);
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (error) {
    res.status(500).json({ message: "exceção ocorrida no servidor" });
  }
};
