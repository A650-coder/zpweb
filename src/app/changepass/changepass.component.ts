import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrl: './changepass.component.css'
})
export class ChangepassComponent {

  changePasswordForm!:FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.changePasswordForm = this.fb.group({
      username: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const { username, oldPassword, newPassword } = this.changePasswordForm.value;

      this.authService.changePassword(username, oldPassword, newPassword).subscribe(
        response => {
          Swal.fire({
            title: 'Success!',
            text: 'Password changed successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          console.log(response);
        },
        error => {
          Swal.fire({
            title: 'Error!',
            text: 'Invalid credentials',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          console.error(error);
        }
      );
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
}
