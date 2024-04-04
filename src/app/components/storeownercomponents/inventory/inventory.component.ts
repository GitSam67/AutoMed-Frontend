import { Component } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { Inventory } from '../../../Models/app.model';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  inventory: Inventory[];

  constructor(){
    this.inventory = new Array<any>();
  }
}
