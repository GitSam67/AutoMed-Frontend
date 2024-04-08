import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { Medicine } from '../../../Models/app.medicine.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { CustomerhttpService } from '../../../Services/customerhttp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecurityhttpService } from '../../../Services/securityhttp.service';

@Component({
  selector: 'app-buymedicine',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './buymedicine.component.html',
  styleUrl: './buymedicine.component.css'
})
export class BuymedicineComponent implements OnInit{
  medicines: Medicine[];
  selectedMedicines: Map<string, number>;
  message: string;
  quantity: number = 0;
  branchId: number= 0;
  token: any;
  customerId: number;
  availableMedicines: Map<string, number>;

  constructor(private adminService: AdminhttpService, private customerService: CustomerhttpService, private userService: SecurityhttpService){
    this.medicines = new Array<any>();
    this.message = "";
    this.token = "";
    this.selectedMedicines = new Map<string, number>();
    this.availableMedicines = new Map<string, number>();
    this.customerId = 0;
  }

  addToCart(medicineName: string, quantity: number) {
    this.selectedMedicines.set(medicineName, quantity);
    alert(`${quantity} units of medicine ${medicineName} have been added to cart`);
  }

  ngOnInit(): void {

    this.customerService.checkAvailability(this.branchId).subscribe({
      next: (response : any) => {

          this.availableMedicines = response;
          console.log(this.branchId);
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

  private filterMedicines(): void {
    
  }

  buyMedicine(): void{
    const claim: any = parseInt(sessionStorage.getItem('claim') || "0", 10);
    this.branchId = parseInt(sessionStorage.getItem('branchId') || "0", 10);

    this.token = sessionStorage.getItem('token');
    this.userService.getUserInfo(this.token).subscribe({
    next:(response:any)=>{
      this.branchId = response.BranchId;
      this.customerId = response.CustomerId;
      console.log(this.selectedMedicines.size);
      if(this.selectedMedicines.size > 0){
        console.log("this executed");
        const orderObject = Object.fromEntries(this.selectedMedicines.entries());
        console.log(orderObject);
        this.customerService.generateMedicalBill(this.customerId, orderObject, claim, 1).subscribe({
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
    },
    error:(error)=>{
      alert(`Error: ${error}`);
    }    
  })

}


}
