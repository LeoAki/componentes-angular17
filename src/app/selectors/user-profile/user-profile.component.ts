import { Component } from '@angular/core';
import { ProfilePhotoComponent } from '../profile-photo/profile-photo.component';

@Component({
  standalone: true,
  imports: [ProfilePhotoComponent],
  template: `<br><br>User profile::<br>    <app-profile-photo />    <button>Upload a new profile photo</button>`,
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
