import { AdminhttpService } from './../../../Services/adminhttp.service';
import { Component } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';

@Component({
  selector: 'app-medicinedetails',
  standalone: true,
  imports: [SuperadminheaderComponent],
  templateUrl: './medicinedetails.component.html',
  styleUrl: './medicinedetails.component.css'
})
export class MedicinedetailsComponent {
  medicines: Medicine[];
  message: string;

  constructor(private adminservice: AdminhttpService ){
    this.medicines = new Array<any>();
    this.message = "";
  }

  ngOnInit(): void {
    this.adminservice.getMedicines().subscribe({
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


  editRow(id:any, med:Medicine): void{
    this.adminservice.updateMedicine(id, med).subscribe({
      next: (response) => {
        this.medicines = response.Records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in updating Medicine. Please try again"+ this.message);
      }
    })
  }

  deleteRow(id:any): void{
    this.adminservice.deleteMedicine(id).subscribe({
      next: (response) => {
        this.medicines = response.Records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in removing Medicine. Please try again"+ this.message);
      }
    })
  }
}
