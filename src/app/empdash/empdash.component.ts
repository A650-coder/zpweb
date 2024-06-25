import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empdash',
  templateUrl: './empdash.component.html',
  styleUrl: './empdash.component.css'
})
export class EmpdashComponent {
  userRole: string | null = null;

  accepted: number = 0;
  pending: number = 0;
  resolved: number = 0;
  rejected: number = 0;
  total: number = 0;  constructor(
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
