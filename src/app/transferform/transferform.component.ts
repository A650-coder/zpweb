import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferform',
  templateUrl: './transferform.component.html',
  styleUrl: './transferform.component.css'
})
export class TransferformComponent implements OnInit
  {
transferForm!:FormGroup

  constructor(private fb: FormBuilder) {
    this.transferForm = this.fb.group({
      fileno: ['', Validators.required],
      fromWhom: ['', Validators.required],
      date: [''],
      fromDate: [''],
      vibhag: ['', Validators.required],
      type: ['सामान्य', Validators.required],
      subject: [''],
      karmachari: [''],
      reason: [''],
      document: [''],
      post: ['CEO']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.transferForm.valid) {
      // Process the form data here (e.g., send to server)
      console.log('Form submitted:', this.transferForm.value);
      // Optionally, reset the form after submission
      this.transferForm.reset();
    } else {
      // Mark all fields as touched to display validation errors
      this.markFormGroupTouched(this.transferForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
