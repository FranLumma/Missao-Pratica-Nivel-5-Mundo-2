import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  constructor() {}
  obterLivros = async () => {
    try {
      const res = await fetch(baseURL, { method: 'GET' });

      const resJson: LivroMongo[] = await res.json();

      const livros = resJson.map((dados) => {
        return new Livro(
          dados._id,
          dados.codEditora,
          dados.titulo,
          dados.resumo,
          dados.autores
        );
      });

      return livros;
    } catch (err) {
      console.error('Erro ao obter livros: ', err);
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(livroMongo),
      });

      const result = await res.json();

      if (res.ok) {
        return result.ok;
      } else {
        throw new Error(`Erro ao excluir livro: ${result.status}`);
      }
    } catch (err) {
      console.error('Erro ao cadastrar livro: ', err);
    }
  };
  excluir = async (codigo: String) => {
    try {
      const res = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      const result = await res.json();

      if (res.ok) {
        return result.ok;
      } else {
        throw new Error(`Erro ao excluir livro: ${result.status}`);
      }
    } catch (err) {
      console.error('Error ao excluir livro: ', err);
    }
  };
}
