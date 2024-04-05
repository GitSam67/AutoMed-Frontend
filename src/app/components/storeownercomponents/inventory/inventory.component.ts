import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../../Models/app.model';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';
import { CommonModule } from '@angular/common';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [StoreownerheaderComponent, StoreownersidepanelComponent, CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  inventory: Inventory[];
  isExpired: Boolean = false;

  constructor(private strService: StoreownerhttpService){
    this.inventory = new Array<any>();
  }

  ngOnInit(): void {
    this.strService.getInventory(1).subscribe({
      next:(response)=>{
        this.inventory = response.Records;
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
  }

  checkIfExpired(index: number) {
  //   this.strService.checkForExpiry(index).subscribe({
  //     next:(response)=>{
  //       this.isExpired = response.Record;
  //     },
  //     error:(error)=>{
  //       alert(`Error: ${error}`);
  //     }
  //   });
  }

// checkIfExpired(){
  
// }

placeOrder(index: number) {
  // this.strService.placeOrder().subscribe({
  //   next:(response)=>{
  //     this.cashbalance = response.Record;
  //   },
  //   error:(error)=>{
  //     alert(`Error: ${error}`);
  //   }
  // });
}
}
