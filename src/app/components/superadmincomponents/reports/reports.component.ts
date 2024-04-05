import { Component } from '@angular/core';
import { Order } from '../../../Models/app.orders.model';
import { CommonModule } from '@angular/common';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';
import { SadminsidepanelComponent } from '../../reusablecomponents/sadminsidepanel/sadminsidepanel.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [SuperadminheaderComponent, SadminsidepanelComponent, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  orders: Order[] = []; 
  salesAmount: number = 0; 

  constructor() {
        
  }

}
