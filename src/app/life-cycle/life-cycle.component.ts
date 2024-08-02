import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnChanges,
                                            OnInit,
                                            DoCheck,
                                            AfterContentInit,
                                            AfterContentChecked,
                                            AfterViewInit,
                                            AfterViewChecked,
                                            OnDestroy {
  constructor() {
    console.log('Constructor: LifecycleComponent inicializado');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit: Componente inicializado.');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck: Ejecutando detección de cambios.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Contenido inicializado.');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Contenido verificado.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Vista inicializada.');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: Vista verificada.');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy: Componente acaba de ser destruido.');
  }
}
