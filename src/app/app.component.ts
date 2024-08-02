import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StandAloneExampleComponent } from './stand-alone-example/stand-alone-example.component';
import { ProfilePhotoComponent } from './selectors/profile-photo/profile-photo.component';
import { AttributeSelectorComponent } from './selectors/attribute-selector/attribute-selector.component';
import { AttributeSelectorTooltipComponent } from './selectors/attribute-selector-tooltip/attribute-selector-tooltip.component';
import { ClassSelectorComponent } from './selectors/class-selector/class-selector.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { CommonModule } from '@angular/common';
import { CustomBaseBasicComponent } from './inheritance/basic/custom-base-basic/custom-base-basic.component';
import { AlumnoComponent } from './inheritance/school/alumno/alumno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    StandAloneExampleComponent, ProfilePhotoComponent,
    AttributeSelectorComponent, AttributeSelectorTooltipComponent,
    ClassSelectorComponent,
    LifeCycleComponent,
    CustomBaseBasicComponent,
    AlumnoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Componentes en Angular 17+';
  showChild = true;
  toggleChild() {
    this.showChild = !this.showChild;
  }
}
