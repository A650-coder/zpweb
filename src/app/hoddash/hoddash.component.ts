import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoddash',
  templateUrl: './hoddash.component.html',
  styleUrl: './hoddash.component.css'
})
export class HoddashComponent {
  userRole: string | null = null;

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
