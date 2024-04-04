import { Component } from '@angular/core';
import { Order } from '../../../Models/app.orders.model';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [StoreownerheaderComponent, StoreownersidepanelComponent, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  orders: Order[] = []; 
  salesAmount: number = 0; 

  constructor() {
        
  }

}
