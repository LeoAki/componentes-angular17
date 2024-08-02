import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAloneExampleComponent } from './stand-alone-example.component';

describe('StandAloneExampleComponent', () => {
  let component: StandAloneExampleComponent;
  let fixture: ComponentFixture<StandAloneExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandAloneExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandAloneExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
