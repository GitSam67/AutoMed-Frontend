import { Component } from '@angular/core';

@Component({
  selector: 'app-storeownersidepanel',
  standalone: true,
  imports: [],
  templateUrl: './storeownersidepanel.component.html',
  styleUrl: './storeownersidepanel.component.css'
})
export class StoreownersidepanelComponent {
  cashbalance: number;
  salesamount: number;

 constructor(){
  this.cashbalance = 0;
  this.salesamount = 0;
 }
}
