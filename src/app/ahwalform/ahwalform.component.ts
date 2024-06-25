import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ahwalform',
  templateUrl: './ahwalform.component.html',
  styleUrl: './ahwalform.component.css'
})
export class AhwalformComponent implements OnInit{
  ahavalForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.ahavalForm = this.fb.group({
      vibhag: [''],
      karmachari: [''],
      stheti: [''],
      search: [''],
      fromDate: [''],
      toDate: ['']
    });
  }
baseurl:string="http://localhost:8080"
  onSearch() {
    // Handle search logic here
    const searchValue = this.ahavalForm.get('search')?.value;
    console.log('Searching for:', searchValue);
  }

  onSubmit() {
    const formValues = this.ahavalForm.value;
    console.log('Form Submitted:', formValues);

    this.http.post(this.baseurl+'/api/submitForm', formValues).subscribe(data => {
      console.log('Response from server:', data);
    },err=>{

    });
  }
}
