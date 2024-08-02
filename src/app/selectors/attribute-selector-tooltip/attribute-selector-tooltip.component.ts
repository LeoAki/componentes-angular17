import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
  selector: '[appTooltip]',
  standalone: true,
  templateUrl: './attribute-selector-tooltip.component.html',
  styleUrl: './attribute-selector-tooltip.component.css'
})
export class AttributeSelectorTooltipComponent {
  @Input() tooltipText: string = '';
  tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.tooltipElement = this.renderer.createElement('span');
    if (this.tooltipElement) {
      this.tooltipElement.textContent = this.tooltipText;
      this.renderer.appendChild(document.body, this.tooltipElement);
      const { left, top } = this.el.nativeElement.getBoundingClientRect();
      this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
      this.renderer.setStyle(this.tooltipElement, 'top', `${top + 20}px`);
      this.renderer.setStyle(this.tooltipElement, 'background-color', 'black');
      this.renderer.setStyle(this.tooltipElement, 'color', 'white');
      this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
      this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
