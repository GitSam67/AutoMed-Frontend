import { AdminhttpService } from './../../../Services/adminhttp.service';
import { Component } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicinedetails',
  standalone: true,
  imports: [SuperadminheaderComponent, RouterModule, CommonModule],
  templateUrl: './medicinedetails.component.html',
  styleUrl: './medicinedetails.component.css'
})
export class MedicinedetailsComponent {
  medicines: Medicine[];
  message: string;
  token:any;
  role:any;

  constructor(private adminservice: AdminhttpService, private router:Router){
    this.medicines = new Array<any>();
    this.message = "";
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.role = sessionStorage.getItem('role');
    if(this.token == null || this.role != 'SuperAdmin') {
      this.router.navigateByUrl('/login');
    }
    this.adminservice.getMedicines(this.token).subscribe({
      next: (response) => {
        this.medicines = response.Records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of Medicines. Please try again"+ this.message);
      }
    })
  }


  editRow(id:any): void{
    sessionStorage.setItem('medId', id);
    this.router.navigateByUrl('medicineeditform');
  }

  deleteRow(id:any): void{
    alert(`Confirm delete for medicine with id: ${id} ?`);
    this.adminservice.deleteMedicine(id, this.token).subscribe({
      next: (response) => {
        this.medicines = response.Records;
        this.message = response.Message;
        console.log(this.message);
        window.location.reload();
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in removing Medicine. Please try again"+ this.message);
      }
    })
  }
}
