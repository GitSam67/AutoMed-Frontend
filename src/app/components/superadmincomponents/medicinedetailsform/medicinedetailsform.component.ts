import { Component } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { Router } from 'express';
import { AdminhttpService } from '../../../Services/adminhttp.service';

@Component({
  selector: 'app-medicinedetailsform',
  standalone: true,
  imports: [],
  templateUrl: './medicinedetailsform.component.html',
  styleUrl: './medicinedetailsform.component.css'
})
export class MedicinedetailsformComponent {
  med: Medicine;
  Name: string;
  Manufacturer: string;
  UnitPrice: number;
  BatchNumber: string;
  ExpiryDate: Date;
  Category: string;

  constructor(private medservice: AdminhttpService, private router: Router) {
    this.med = new Medicine(0, '', '', 0, '', new Date(), '');
    this.Name = '',this.Manufacturer = '', this.UnitPrice = 0, this.BatchNumber = '', this.ExpiryDate = new Date(), this.Category = '';
  }

  addMed(): void {

    const newMed: Medicine = {
      MedicineId: 0,
      Name: this.Name,
      Manufacturer: this.Manufacturer,
      UnitPrice : this.UnitPrice,
      BatchNumber: this.BatchNumber,
      ExpiryDate: this.ExpiryDate,
      Category: this.Category
    };

    this.medservice.addMedicine(newMed).subscribe({
      next:(response)=>{
        this.med = response.Record;
        alert(response.Message);
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
}
}
