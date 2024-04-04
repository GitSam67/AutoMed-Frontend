import { Component } from '@angular/core';
import { Order } from '../../../Models/app.orders.model';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';

@Component({
  selector: 'app-branchreports',
  standalone: true,
  imports: [StoreownerheaderComponent, StoreownersidepanelComponent],
  templateUrl: './branchreports.component.html',
  styleUrl: './branchreports.component.css'
})
export class BranchreportsComponent {
  orders: Order[] = []; 
  salesAmount: number = 0; 

}
