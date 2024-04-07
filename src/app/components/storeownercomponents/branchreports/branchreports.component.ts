import { Component, OnInit } from '@angular/core';
import { Order } from '../../../Models/app.orders.model';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';
import { CommonModule } from '@angular/common';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';

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

  constructor(private strService: StoreownerhttpService){

  }
  ngOnInit(): void {
    this.strService.getSalesReport(1).subscribe({
    next:(response)=>{
      this.orders = response.Records;
    },
    error:(error)=>{
      alert(`Error: ${error}`);
    }
  });
  }

}
