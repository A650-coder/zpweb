import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  baseurl: string = 'http://localhost:8080/';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserServiceService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;

      let params = new HttpParams()
        .set('email', formValue.email)
        .set('password', formValue.password);

      this.http.post<any>(this.baseurl + 'user/login', params).subscribe(
        response => {
          console.log(response);
          console.log(this.loginForm.value);

          // Store the user role in the UserService
          this.userService.setUserRole(response.role);

          if (response.role === 'hod') {
            this.handleSuccessfulLogin('/HOD');
          } else if (response.role === 'emp') {
            this.handleSuccessfulLogin('/EMP');
          } else if (response.role === 'so') {
            this.handleSuccessfulLogin('/SO');
          } else if (response.role === 'admin') {
            this.handleSuccessfulLogin('/CEO');
          } else {
            this.handleError('Login failed. Please check your credentials and try again.');
          }
        },
        err => {
          console.error('Login error:', err);
          this.handleError('Something went wrong. Please try again later.');
        }
      );
    } else {
      this.handleError('Please enter valid email and password.');
    }
  }

  private handleSuccessfulLogin(redirectUrl: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'You have logged in successfully.',
      showConfirmButton: false,
      timer: 1000
    }).then(() => {
      this.router.navigateByUrl(redirectUrl);
      // this.router.navigate(['/sidebar']);
    });
  }

  private handleError(errorMessage: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Login Error',
      text: errorMessage,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
