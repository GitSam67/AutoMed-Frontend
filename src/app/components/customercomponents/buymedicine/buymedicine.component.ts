import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { Medicine } from '../../../Models/app.medicine.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { CustomerhttpService } from '../../../Services/customerhttp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buymedicine',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './buymedicine.component.html',
  styleUrl: './buymedicine.component.css'
})
export class BuymedicineComponent implements OnInit{
  medicines: Medicine[];
  selectedMedicines: { medicineName: string, quantity: number }[] = [];
  message: string;
  quantity: number = 0;
  availableMedicines: { medicineName: string, quantity: number }[] = [];
  constructor(private adminService: AdminhttpService, private customerService: CustomerhttpService){
    this.medicines = new Array<any>();
    this.message = "";
  }

  addToCart(medicineName: string, quantity: number) {
    this.selectedMedicines.push({ medicineName, quantity });
    alert(`${quantity} units of medicine ${medicineName} have been added to cart`);
  }

  ngOnInit(): void {

    this.customerService.checkAvailability(1).subscribe({
      next: (response : any) => {
          this.availableMedicines = response;
          console.log(this.availableMedicines);
          this.message = "No records found.";
      },
      error: (error) =>{
        this.message = `Error: ${error}`;
      }
    })


    this.adminService.getMedicines().subscribe({
      next: (response) => {
        this.medicines = response.Records;
        // this.message = response.Message;
        // console.log(this.message);
        // this.filterMedicines();
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of Medicines. Please try again"+ this.message);
      }
    })
  }

  // private filterMedicines(): void {
  //   this.medicines = this.medicines.filter(medicine => 
  //     this.availableMedicines.some(availableMedicine => availableMedicine.medicineName == medicine.Name)
  //   );
  //   console.log(this.medicines);
  // }

  buyMedicine(): void{
    this.customerService.generateMedicalBill(1, this.selectedMedicines, 200, 1).subscribe({
      next: (response) => {
        this.medicines = response.Records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in executing order. Please try again"+ this.message);
      }
    })
  }

}
