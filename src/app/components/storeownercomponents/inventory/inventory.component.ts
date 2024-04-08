import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../../Models/app.model';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';
import { CommonModule } from '@angular/common';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';
import { SecurityhttpService } from '../../../Services/securityhttp.service';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [StoreownerheaderComponent, StoreownersidepanelComponent, CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  inventory: Inventory[];
  branchName: Map<number, string>;
  medName: Map<number, string>;
  isExpired: Boolean = false;
  token: any = '';
  branchId: number = 0;
  message: string = '';
  placeorder: boolean = false;
  name: any = '';
  order: Map<string, number>;
  stock: any[] = [];
  qty: number = 0;
  alertRecords: any[] = [];

  constructor(private strService: StoreownerhttpService, private userService:SecurityhttpService, private adminservice:AdminhttpService){
    this.inventory = new Array<any>();
    this.branchName = new Map<number, string>();
    this.medName = new Map<number, string>();
    this.order = new Map<string, number>();
  }

  ngOnInit(): void {

    this.token = sessionStorage.getItem('token');
    this.userService.getUserInfo(this.token).subscribe({
    next:(response:any)=>{
      console.log(response);
      this.branchId = response.BranchId;

      this.strService.getInventory(this.branchId).subscribe({
        next:(response:any)=>{
          console.log(response);
          this.inventory = response.Records;
          console.log(this.inventory);
        },
        error:(error)=>{
          alert(`Error: ${error}`);
        }
      });

      this.strService.checkForExpiry(this.branchId).subscribe({
        next:(response)=>{
          console.log(response);
          response.Records.forEach(item => {
            console.log(item);
            this.alertRecords.push(item.Name);
          });
          if(this.alertRecords.length > 0) {
            alert(`${response.Message}: '${this.alertRecords}'\n Please discard them ASAP...!!`);
          }
        },
        error:(error)=>{
          alert(`Error: ${error}`);
        }
      });

      this.strService.checkForStockLevel(this.branchId).subscribe({
        next:(response)=>{
          console.log(response);
          response.Records.forEach(item => {
            console.log(item);
            this.alertRecords.push(item.Name);
          });
          if(this.alertRecords.length > 0) {
            alert(`${response.Message}: '${this.alertRecords}'\n Please Restock them ASAP...!!`);
          }
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

  this.adminservice.getMedicines().subscribe({
    next: (response) => {
        console.log(response);
        response.Records.forEach(record => {
          this.medName.set(record.MedicineId, record.Name);
        });
    },
    error: (error) => {
      this.message = `Error: ${error}`;
      alert("Error in fetching branch details. Please try again"+ this.message);
    }
  })

  }

  PlaceOrder(med:any){
    this.placeorder = !this.placeorder;
    this.name = med;
  }

  ReStock(order:any, id:any) {
    if (order.get(this.name) > 0) {
    console.log(order);
    const orderObject = Object.fromEntries(order.entries());
    console.log(orderObject);
    this.strService.placeOrder(orderObject, id).subscribe({
      next:(response)=>{
        alert(response.Message);
        window.location.reload();
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }

    });
  }
  else {
    alert(`Quantity cannot be negative..!!`);
  }
}

  DiscardStock(name:any) {
    alert(`Confirm discard of item: ${name}`);
    console.log(name);
    this.stock.push(name);
    console.log(this.stock);
    this.strService.removeStock(this.branchId, this.stock).subscribe({
      next:(response)=>{
        console.log(response.Message);
        window.location.reload();
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
}
}
