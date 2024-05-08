import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()//nos permite inyectar un valor de un componente hijo hacia un componente padre
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(index: number): void {
    console.log({index});
    //al hacer emit, podemos enviar este valor al componente padre
    //this.onDelete.emit(index);

  }

  public onDeleteCharacterById(id?: string): void {
    console.log(id);
    if (!id) {
      return;
    };
    this.onDelete.emit(id);
  }

}
