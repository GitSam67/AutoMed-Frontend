import { Branch } from './../../../Models/app.model';
import { Component, OnInit } from '@angular/core';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';
import { SecurityhttpService } from '../../../Services/securityhttp.service';
import { Route, Router } from '@angular/router';

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
  role:any;

 constructor(private strService: StoreownerhttpService, private userService: SecurityhttpService, private router:Router){
  this.cashbalance = 0;
  this.salesamount = 0;
  this.branchId = 0;
  this.token = "";
 }

 ngOnInit(): void {
  this.token = sessionStorage.getItem('token');
  this.role = sessionStorage.getItem('role');
  if(this.token == null || this.role != 'StoreOwner') {
    this.router.navigateByUrl('/login');
  }
  this.userService.getUserInfo(this.token).subscribe({
    next:(response:any)=>{
      this.branchId = response.BranchId;
      this.strService.getCashBalance(this.branchId, this.token).subscribe({
        next:(response:any)=>{
          console.log(response);
          this.cashbalance = response;
        },
        error:(error)=>{
          alert(`Error: ${error}`);
        }
      });
      this.strService.getTotalSales(this.branchId, this.token).subscribe({
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
