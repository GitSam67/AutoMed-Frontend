import { Component } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinedetailsform',
  standalone: true,
  imports: [FormsModule],
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
  minDate: string;

  constructor(private medservice: AdminhttpService, private router: Router) {
    this.med = new Medicine(0, '', 0, new Date(), '', '', '');
    this.Name = '',this.Manufacturer = '', this.UnitPrice = 0, this.BatchNumber = '', this.ExpiryDate = new Date(), this.Category = '';

    const today = new Date();

    const formattedDate = this.formatDate(today);

    this.minDate = formattedDate;
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
