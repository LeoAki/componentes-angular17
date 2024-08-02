import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonaComponent } from '../PersonaComponente.class';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent extends PersonaComponent implements OnInit, OnDestroy {

  curso: string = 'Matemáticas';

  constructor() {
    super();
    console.log('Alumno constructor');
  }

  ngOnInit() {
    console.log('AlumnoComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('AlumnoComponent ngOnDestroy');
  }

  override saludar() {
    super.saludar();
    console.log(`Estoy en el curso de ${this.curso}.`);
  }

}
