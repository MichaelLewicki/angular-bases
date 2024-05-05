import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()//si no se declara un nombre. Se adopta el nombre del atributo
  public characterList : Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];//El contenido de este atributo perderá su valor y adoptará el que llega de Input si se asigna ese decorador en el html

}
