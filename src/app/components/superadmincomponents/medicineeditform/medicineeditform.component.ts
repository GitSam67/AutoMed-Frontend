import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicineeditform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './medicineeditform.component.html',
  styleUrl: './medicineeditform.component.css'
})
export class MedicineeditformComponent implements OnInit{
  med: Medicine;
  Name: any;
  Manufacturer: any;
  UnitPrice: number;
  BatchNumber: any;
  ExpiryDate: Date;
  Category: any;
  minDate: any;
  medId: any = 0;
  message:any;
  token:any;
  role:any;

  constructor(private medservice: AdminhttpService, private router: Router) {
    this.med = new Medicine(0, '', 0, new Date(),'', '', '');
    this.UnitPrice = 0, this.ExpiryDate = new Date();

    const today = new Date();

    const formattedDate = this.formatDate(today);

    this.minDate = formattedDate;
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.role = sessionStorage.getItem('role');
    if(this.token == null || this.role != 'SuperAdmin') {
      this.router.navigateByUrl('/login');
    }
    this.medId = sessionStorage.getItem('medId');
    this.medservice.getMedicine(this.medId, this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.Name = response.Record.Name;
        this.Manufacturer = response.Record.Manufacturer;
        this.UnitPrice = response.Record.UnitPrice;
        this.Category = response.Record.Category;
        this.ExpiryDate = response.Record.ExpiryDate;
        this.BatchNumber = response.Record.BatchNumber;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in updating details of store owners. Please try again"+ this.message);
      }
    });
  }

  editMed(): void {

    if(this.Name == null , this.Manufacturer == null, this.UnitPrice == 0, this.BatchNumber == null, this.ExpiryDate == new Date(0), this.Category == null)
      {
        alert("Fields must be not null..!!");
        return;
      }


    const newMed: Medicine = {
      MedicineId: 0,
      Name: this.Name,
      Manufacturer: this.Manufacturer,
      UnitPrice : this.UnitPrice,
      BatchNumber: this.BatchNumber,
      ExpiryDate: this.ExpiryDate,
      Category: this.Category
    };

    this.medservice.updateMedicine(this.medId, newMed, this.token).subscribe({
      next:(response)=>{
        this.med = response.Record;
        alert(response.Message);
        this.router.navigateByUrl('/medicinedetails');
      },
      error:(error)=>{
        alert(`Medicine already exists..!!`);
      }
    });

}

formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}
}
