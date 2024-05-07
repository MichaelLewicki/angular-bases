import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()//nos permite inyectar un valor de un componente hijo hacia un componente padre
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void {
    //debugger;
    console.log(this.character);

    if (this.character.name.length === 0) {
      return;//cortar flujo si manda nombre vacío
    };

    //al hacer emit, podemos enviar este valor al componente padre
    this.onNewCharacter.emit(this.character);

    //reload blank
    this.character = {
      name: '',
      power: 0
    };
  };

}
