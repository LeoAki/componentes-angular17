import { Component, OnInit } from '@angular/core';
import { InheritanceBase } from '../inheritanceBase.class';

@Component({
  selector: 'app-custom-base-basic',
  standalone: true,
  templateUrl: './custom-base-basic.component.html',
  styleUrl: './custom-base-basic.component.css'
})
export class CustomBaseBasicComponent extends InheritanceBase implements OnInit {
  ngOnInit(): void {
    this.metodo1();
  }

}
