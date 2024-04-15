import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { Order } from '../../../Models/app.orders.model';
import { Medicine } from '../../../Models/app.medicine.model';
import { SecurityhttpService } from '../../../Services/securityhttp.service';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';
import { CustomerhttpService } from '../../../Services/customerhttp.service';
import { CommonModule } from '@angular/common';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders: Order[] = [];
  medicines: Medicine[];
  token: any;
  branchId: string = "";
  branchName: Map<number, string>;
  customerId: number = 0;
  customerName: any;
  message: any;
  role:any;


  constructor(private userService: SecurityhttpService, private strService: StoreownerhttpService, private customerService: CustomerhttpService, private adminService:AdminhttpService, private router:Router){
    this.orders = new Array<any>();
    this.medicines = new Array<any>();
    this.branchName = new Map<number, string>();
  }

  viewInvoice(orderId: number): void{
    console.log(orderId);
    console.log(this.customerId);
    this.customerService.viewMedicalBill(this.customerId, Number(orderId), this.token).subscribe({
      next:(response:any)=>{
        console.log(response);
      },
      error(error) {
        alert(`Error: ${error}`);
      },
    })
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.role = sessionStorage.getItem('role');
    if(this.token == null || this.role != 'Customer') {
      this.router.navigateByUrl('/login');
    }
    this.userService.getUserInfo(this.token).subscribe({
    next:(response:any)=>{
      console.log(response);
      this.customerId = response.CustomerId;
      this.customerName = response.CustomerName;
      console.log(this.customerId);

      this.strService.getSalesReport(0, this.token).subscribe({
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

  this.adminService.getBranches(this.token).subscribe({
    next: (response) => {
        console.log(response);
        response.Records.forEach(record => {
          this.branchName.set(record.BranchId, record.BranchName);
        });
    },
    error: (error) => {
      this.message = `Error: ${error}`;
      alert("Error in fetching branch details. Please try again"+ this.message);
    }
  })

  }



}
