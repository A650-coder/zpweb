import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public userService: UserServiceService,private router:Router) {}

  // get isLoggedIn(): boolean {
  //   return this.userService.isLoggedIn();
  // this.router.navigate(['home']);
  //   }
}
