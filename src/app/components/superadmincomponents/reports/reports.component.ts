import { Component, OnInit } from '@angular/core';
import { Order } from '../../../Models/app.orders.model';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';
import { CommonModule } from '@angular/common';
import { AdminhttpService } from '../../../Services/adminhttp.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [StoreownerheaderComponent, StoreownersidepanelComponent, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  orders: Order[] = [];
  salesAmount: number = 0;
  message: string;

  constructor(private adminservice:AdminhttpService) {
        this.orders = new Array<Order>();
        this.salesAmount = 0;
        this.message = "";
  }

  ngOnInit(): void {

    this.adminservice.getSales(0).subscribe({
      next: (response) => {
        this.orders = response.Records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of sales. Please try again"+ this.message);
      }
    })
  }


}
