import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  public onNewCharacter(character: Character) : void {
    console.log('MainPage');
    console.log(character);
    //this.characters.unshift(character);// .unshift es como .add pero agrega el elemento al principio del arreglo.
    this.characters.push(character); //.push es lo mismo que .add en Java. Agrega el elemento al final
  };


}
