import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: '[app-attribute-selector]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styleUrl: './attribute-selector.component.css'
})
export class AttributeSelectorComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }

}
