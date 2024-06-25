import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ZillaParishad';
  constructor(public userService: UserServiceService) {}

  // get isLoggedIn(): boolean {
  //   return this.userService.isLoggedIn();
  // }
  
  
}
