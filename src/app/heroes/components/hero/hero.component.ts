import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;


  public get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  public getHeroDescription() : string {
    return `${ this.name } -  ${this.age}`;
  }

  public changeHero() : string {
    return this.name = 'Luffy';
  }

  public changeAge() : number {
    return this.age = 19;
    //throw 'Método no implementado' //esto agregamos cuando aún no ingresamos el código del método
  }

  public resetForm() : void {
    this.name = 'ironman';
    this.age = 45;
  }

}
