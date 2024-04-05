import { Component } from '@angular/core';
import { Order } from '../../../Models/app.orders.model';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branchreports',
  standalone: true,
  imports: [StoreownerheaderComponent, StoreownersidepanelComponent, CommonModule],
  templateUrl: './branchreports.component.html',
  styleUrl: './branchreports.component.css'
})
export class BranchreportsComponent {
  orders: Order[] = []; 
  salesAmount: number = 0; 

}
