import { Branch } from './../../../Models/app.model';
import { Component, OnInit } from '@angular/core';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';
import { SecurityhttpService } from '../../../Services/securityhttp.service';

@Component({
  selector: 'app-storeownersidepanel',
  standalone: true,
  imports: [],
  templateUrl: './storeownersidepanel.component.html',
  styleUrl: './storeownersidepanel.component.css'
})
export class StoreownersidepanelComponent implements OnInit{
  cashbalance: number;
  salesamount: number;
  branchId: number;
  token:any;

 constructor(private strService: StoreownerhttpService, private userService: SecurityhttpService){
  this.cashbalance = 0;
  this.salesamount = 0;
  this.branchId = 0;
  this.token = "";
 }

 ngOnInit(): void {

  this.token = sessionStorage.getItem('token');
  this.userService.getUserInfo(this.token).subscribe({
    next:(response:any)=>{
      this.branchId = response.BranchId;
      this.strService.getCashBalance(this.branchId).subscribe({
        next:(response:any)=>{
          console.log(response);
          this.cashbalance = response;
        },
        error:(error)=>{
          alert(`Error: ${error}`);
        }
      });
      this.strService.getTotalSales(this.branchId).subscribe({
        next:(response:any)=>{
          console.log(response);
          this.salesamount = response;
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
