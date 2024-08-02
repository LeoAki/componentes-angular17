import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSelectorTooltipComponent } from './attribute-selector-tooltip.component';

describe('AttributeSelectorTooltipComponent', () => {
  let component: AttributeSelectorTooltipComponent;
  let fixture: ComponentFixture<AttributeSelectorTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeSelectorTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeSelectorTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
