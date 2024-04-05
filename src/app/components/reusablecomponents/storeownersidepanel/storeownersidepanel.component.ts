import { Component, OnInit } from '@angular/core';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';

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
  storeownerid: number;

 constructor(private strService: StoreownerhttpService){
  this.cashbalance = 0;
  this.salesamount = 0;
  this.storeownerid = 1
 }

 ngOnInit(): void {
  this.strService.getCashBalance(1).subscribe({
    next:(response)=>{
      this.cashbalance = response.Record;
    },
    error:(error)=>{
      alert(`Error: ${error}`);
    }
  });
 }
}
