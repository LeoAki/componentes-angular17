import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBaseBasicComponent } from './custom-base-basic.component';

describe('CustomBaseBasicComponent', () => {
  let component: CustomBaseBasicComponent;
  let fixture: ComponentFixture<CustomBaseBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomBaseBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBaseBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
