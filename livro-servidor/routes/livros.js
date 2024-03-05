const express = require("express");
const router = express.Router();

const { obterLivros, incluir, excluir } = require("../modelo/livro-dao");

router.get("/", async (req, res) => {
  try {
    const lista = await obterLivros();
    res.json(lista);
  } catch (err) {
    res.status(500).send({ err: "Error ao obter lista de livros" });
  }
});

router.post("/", async (req, res) => {
  const { titulo, codEditora, resumo, autores } = req.body;
  try {
    const livro = await incluir({ titulo, codEditora, resumo, autores });
    return res.send({ livro });
  } catch (err) {
    res.status(500).json({ err: "Erro ao cadastrar" });
  }
});

router.delete("/:codigo", async (req, res) => {
  const codigo = req.params.codigo;
  try {
    const livroDeletado = await excluir(codigo);
    return res.send({ livroDeletado });
  } catch (err) {
    return res.status(400).send({ err: "Erro ao deletar livro" });
  }
});

module.exports = router;
