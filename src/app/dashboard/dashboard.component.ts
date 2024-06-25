import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

interface Employee {
  name: string;
  department: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  pendingPatra: Employee[] = [
    { name: 'KAMLAKAR TULSHIRAM ZADE', department: 'पशुसंवर्धन विभाग' },
    { name: 'ANIRUDHA MURARI SHENDE', department: 'ग्रामपंचायत विभाग' },
    { name: 'PRAVIN GIRDKAR', department: 'शिक्षण विभाग (प्राथमिक)' },
    { name: 'SUVARNA SHRIRAM CHAUDHARI', department: 'ग्रामपंचायत विभाग' },
    { name: 'DEWANAND PREMLAL THEMASKAR', department: 'शिक्षण विभाग (प्राथमिक)' },
    { name: 'MANGALA HARISHCHANDRA BADKHAL', department: 'शिक्षण विभाग (प्राथमिक)' },
    { name: 'Dilip Jambhule', department: 'म.रा.रे.ह.यो.' },
    { name: 'SANDIP SHARADRAO ISAYE', department: 'म.रा.रे.ह.यो.' },
    { name: 'Bhalchandra Madhukar Sakharkar', department: 'वांयकाम विभाग' },
    { name: 'ATISH LAXMANRAO GHONGE', department: 'पशुसंवर्धन विभाग' }
  ];

  pendingNasti: Employee[] = [
    { name: 'SUNITA HARIDAS LOKHANDE', department: 'शिक्षण विभाग (प्राथमिक)' },
    { name: 'SANGITA MANOJ PANDHARE', department: 'शिक्षण विभाग (प्राथमिक)' },
    { name: 'SOMESHWAR NAMDEORAO JAIPULKAR', department: 'सामान्य प्रशासन विभाग' },
    { name: 'VILAS HARIHARAO MANDAOKAR', department: 'सामान्य प्रशासन विभाग' },
    { name: 'AJAY SHAMRAO MUSANWAR', department: 'महिला व बालकल्याण विभाग' },
    { name: 'Vikas Mohan Rathod', department: 'वांयकाम विभाग' },
    { name: 'Sarin Bhaskar Pal', department: 'वांयकाम विभाग' },
    { name: 'GANESH MOHANSINGH ADE', department: 'सामान्य प्रशासन विभाग' },
    { name: 'Rakesh Dadaji Nakade', department: 'राष्ट्रीय ग्रामीण आरोग्य मिशन' },
    { name: 'DEVANAND VITTHAL NEWARE', department: 'सामान्य प्रशासन विभाग' }
  ];

  accepted: number = 0;
  pending: number = 0;
  resolved: number = 0;
  rejected: number = 0;
  total: number = 0;
  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,
    private userService:UserServiceService,
    private router:Router) 
    {}
  // ngOnInit() {
  //   this.http.get(this.baseUrl+"pending").subscribe((data:any) => {
  //     this.userRole = this.userService.getUserRole();
  //     this.accepted = data.accepted;
  //     this.pending = data.pending;
  //     this.resolved = data.resolved;
  //     this.rejected = data.rejected;
  //     this.total = data.total;
  //     this.fetchPendingLetterEmployees();
  //     this.fetchPendingNastiEmployees();
  //   });
  // }
  
//   fetchPendingLetterEmployees(): void {
//     this.http.get<Employee[]>(this.baseUrl+"employees/pending-letter" ).subscribe(
//       data => {
//         // this.pendingLetterEmployees = data;
//       },
//       error => {
//         console.error('Error fetching pending letter employees:', error);
//       }
//     );
//   }

//   fetchPendingNastiEmployees(): void {
//     this.http.get<Employee[]>(this.baseUrl+"employees/pending-nasti").subscribe(
//       data => {
//         // this.pendingNastiEmployees = data;
//       },
//       error => {
//         console.error('Error fetching pending Nasti employees:', error);
//       }
//     );
// }
  }
