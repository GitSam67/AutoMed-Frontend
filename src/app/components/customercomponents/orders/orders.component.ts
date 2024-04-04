import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { Order } from '../../../Models/app.orders.model';
import { Medicine } from '../../../Models/app.medicine.model';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Order[]
  medicines: Medicine[]
  constructor(){
    this.orders = new Array<any>();
    this.medicines = new Array<any>();
    this.medicines.push(
      { MedicineId: 1, Name: "Paracetamol", Manufacturer: "SKPL", UnitPrice: 20, BatchNumber: '2', ExpiryDate: new Date(), Category: "AntiHistamines"},
    )
    this.orders.push(
      { OrderId: 1, CustomerId: 1, Medicines: [this.medicines[0], this.medicines[1]], PurchaseTime: new Date(), TotalBill: 500, BranchId: 2}
    );

  }
}
