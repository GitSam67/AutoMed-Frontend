import { Component, OnInit } from '@angular/core';
import { Order } from '../../../Models/app.orders.model';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';
import { CommonModule } from '@angular/common';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { SecurityhttpService } from '../../../Services/securityhttp.service';

@Component({
  selector: 'app-branchreports',
  standalone: true,
  imports: [StoreownerheaderComponent, StoreownersidepanelComponent, CommonModule],
  templateUrl: './branchreports.component.html',
  styleUrl: './branchreports.component.css'
})
export class BranchreportsComponent implements OnInit{
  orders: Order[] = [];
  salesAmount: number = 0;
  branchName: Map<number, string>;
  message: string = '';
  branchId: number;
  token:any;

  constructor(private strService: StoreownerhttpService, private adminservice:AdminhttpService, private userService:SecurityhttpService){
    this.branchName = new Map<number, string>();
    this.branchId = 0, this.token = '';
  }
  ngOnInit(): void {

    this.token = sessionStorage.getItem('token');
    this.userService.getUserInfo(this.token).subscribe({
    next:(response:any)=>{
      console.log(response);
      this.branchId = response.BranchId;

      this.strService.getSalesReport(this.branchId).subscribe({
        next:(response)=>{
          console.log(response);
          this.orders = response.Records;
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


  this.adminservice.getBranches().subscribe({
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
