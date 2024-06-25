import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-trackfile',
  templateUrl: './trackfile.component.html',
  styleUrl: './trackfile.component.css'
})
export class TrackfileComponent {
  trackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.trackForm = this.fb.group({
      vibhag: ['', Validators.required],
      fileno: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.trackForm.valid) {
      console.log('Form Submitted', this.trackForm.value);
      Swal.fire({
        title: 'Success!',
        text: 'Form successfully submitted!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      this.trackForm.markAllAsTouched();  // Mark all fields as touched to trigger validation messages
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
}import Swal from 'sweetalert2';

