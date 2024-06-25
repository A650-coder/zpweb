import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userRole: string | null = null;

  setUserRole(role: string): void {
    this.userRole = role;
    localStorage.setItem('userRole', role);  // Persist role across refreshes
  }

  getUserRole(): string | null {
    if (!this.userRole) {
      this.userRole = localStorage.getItem('userRole');
    }
    return this.userRole;
  }

  logout(): void {
    this.userRole = null;
    localStorage.removeItem('userRole');
  }
}
