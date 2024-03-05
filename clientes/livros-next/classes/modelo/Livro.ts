class Livro {
  codigo: String;
  codEditora: number;
  titulo: String;
  resumo: String;
  autores: Array<String>;

  constructor(
    codigo: String,
    codEditora: number,
    titulo: String,
    resumo: String,
    autores: Array<String>
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}

export default Livro;
