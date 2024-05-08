import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  public onNewCharacter(character: Character) : void {
    //console.log('MainPage');
    const newCharacter = {
      id: uuid(),
      ...character //esto se llama spread y sirve para mapear las propiedades de un objeto en el actual
    };
    console.log(newCharacter);
    //this.characters.unshift(character);// .unshift es como .add pero agrega el elemento al principio del arreglo.
    this.characters.push(newCharacter); //.push es lo mismo que .add en Java. Agrega el elemento al final
  };

  public onDeleteCharacter(index: number) : void {
    let deletedRows:number = 1;
    //splice nos permite eliminar un elemento del array mediante su numero de index y la cantidad de elementos que deseamos eliminar
    this.characters.splice(index, deletedRows);
  };

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  };

}
