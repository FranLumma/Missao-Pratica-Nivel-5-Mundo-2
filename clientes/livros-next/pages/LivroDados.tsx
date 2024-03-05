import type { NextPage } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Menu } from "@/componentes/Menu";
import Livro from "@/classes/modelo/Livro";
import ControleEditora from "@/classes/controle/ControleEditora";
import ControleLivro from "@/classes/controle/ControleLivros";

const controleLivros = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados: NextPage = () => {
  const router = useRouter();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = eval(event.target.value);
    setCodEditora(valor);
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let livro = new Livro("", codEditora, titulo, resumo, autores.split("\n"));
    try {
      if (!titulo || !resumo || !autores) {
        alert("Campo de dados vazio! \n insira os dados");
      } else {
        controleLivros.incluir(livro).then(() => router.push("/LivroLista"));
      }
    } catch (error) {
      console.error("Ocorreu um erro ao incluir o livro:", error);
    }
  };

  return (
    <div className="styles.container">
      {" "}
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main>
        <div className="px-5 mx-auto col-11">
          <h1>Dados do Livro</h1>
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
                className="btn btn-primary my-3"
                type="submit"
                value="Salvar Dados"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LivroDados;
