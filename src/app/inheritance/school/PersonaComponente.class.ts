import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
  template: ''
})
export class PersonaComponent {
  @Input() nombre = '';
  @Input() edad: number = 0;

  constructor() {
    console.log('PersonaComponent constructor');
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }

}
