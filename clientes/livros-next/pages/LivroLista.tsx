import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Menu } from "@/componentes/Menu";
import Head from "next/head";
import Livro from "@/classes/modelo/Livro";
import { LinhaLivro } from "@/componentes/LinhaLivro";
import styles from "../styles/Home.module.css";
import ControleLivro from "@/classes/controle/ControleLivros";

const controleLivros = new ControleLivro();

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState(Array<Livro>);
  const [carregado, setCarregado] = useState(Boolean);

  useEffect(() => {
    const obterTodos = async () => {
      await controleLivros.obterLivros().then((res) => {
        setLivros(res);
      });
    };
    obterTodos();
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo: String) => {
    controleLivros.excluir(codigo).then(() => setCarregado(false));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className="px-5 text-left">
        <h1 className="text-left">Catálogo de Livros</h1>
        <table className="table table-striped text-left">
          <thead className="table-dark">
            <tr>
              <th className="col-2">Título</th>
              <th className="col-6">Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => {
              return (
                <LinhaLivro
                  livro={livro}
                  excluir={() => {
                    excluir(livro.codigo);
                  }}
                  key={index}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
