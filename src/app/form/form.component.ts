import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nastiForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.nastiForm = this.fb.group({
      initial: ['', Validators.required],
      tableName: ['', Validators.required],
      fileno: [{ value: '', disabled: true }, Validators.required],
      date: ['', Validators.required],
      subject: ['', Validators.required],
      type: ['', Validators.required],
      reason: ['', Validators.required],
      document: [null, Validators.required],
      storageType: ['', Validators.required]
    });
  }

  baseurl: string = "http://localhost:8080/";

  onSubmit() {
    if (this.nastiForm.valid) {
      const formData = new FormData();
      formData.append('initial', this.nastiForm.get('initial')?.value);
      formData.append('tableName', this.nastiForm.get('tableName')?.value);
      formData.append('fileno', this.nastiForm.get('fileno')?.value);
      formData.append('date', this.formatDate(this.nastiForm.get('date')?.value));
      formData.append('subject', this.nastiForm.get('subject')?.value);
      formData.append('type', this.nastiForm.get('type')?.value);
      formData.append('reason', this.nastiForm.get('reason')?.value);
      formData.append('document', this.nastiForm.get('document')?.value);
      formData.append('storageType', this.nastiForm.get('storageType')?.value);

      this.http.post(this.baseurl + "nastis/formdata", formData).subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Success!',
            text: 'Form successfully submitted!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        },
        error: (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while submitting the form.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      this.nastiForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages

      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.nastiForm.get('document')?.setValue(file);
    }
  }

  private formatDate(date: string): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}
