import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { Order } from '../../../Models/app.orders.model';
import { Medicine } from '../../../Models/app.medicine.model';
import { SecurityhttpService } from '../../../Services/securityhttp.service';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';
import { CustomerhttpService } from '../../../Services/customerhttp.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders: Order[] = [];
  medicines: Medicine[];
  token: any = "";
  branchId: string = "";
  customerId: number = 0;
  constructor(private userService: SecurityhttpService, private strService: StoreownerhttpService, private customerService: CustomerhttpService){
    this.orders = new Array<any>();
    this.medicines = new Array<any>();
  }

  viewInvoice(orderId: any): void{
    this.customerService.viewMedicalBill(this.customerId, orderId).subscribe({
      next:(response:any)=>{
        console.log(response.message);
      },
      error(error) {
        alert(`Error: ${error}`);
      },
    })
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.userService.getUserInfo(this.token).subscribe({
    next:(response:any)=>{
      console.log(response);
      this.branchId = response.BranchId;
      this.customerId = response.CustomerId;

      this.strService.getSalesReport(this.branchId).subscribe({
        next:(response)=>{
          console.log(response);
          this.orders = response.Records;

          this.orders = this.orders.filter(order => order.CustomerId === this.customerId);
        },
        error:(error)=>{
          alert(`Error: ${error}`);
        }
      });
    },
    error:(error)=>{
      console.log(`Error: ${error}`);
    }
  });
  }

  
  
}
