import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    {
      codEditora: 0,
      nome: 'HarperCollins',
    },
    {
      codEditora: 1,
      nome: 'Schwarcz S.A.',
    },
    {
      codEditora: 2,
      nome: 'Nova Fronteira',
    },
  ];
  constructor() {}

  getNomeEditora(codEditora: number): string {
    let editora = this.editoras.filter(
      (editora) => editora.codEditora === codEditora
    );
    return editora.length > 0 ? editora[0].nome : 'Não encontrada';
  }
  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}
