import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  public deletedHero?: string;

  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public removeLastHero(): void {
    this.deletedHero = this.heroNames.pop(); //pop elimina y retorna el último elemento
    //const deletedHero: string | undefined = this.heroNames.pop();
    //console.log({deletedHero}); //al agregar el {} hacemos que se muestre como objeto

  };

}
