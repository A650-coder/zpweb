import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private userService: UserServiceService, private router: Router) { }


  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}
