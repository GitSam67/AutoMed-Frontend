import { Injectable } from '@angular/core';
import { Medicine } from '../Models/app.medicine.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: Medicine[] = [];
  cart: BehaviorSubject<Medicine[]> = new BehaviorSubject<Medicine[]>(this._cart);

  addToCart(medicine: Medicine): void {
    this._cart.push(medicine);
    this.cart.next(this._cart);
  }

  removeFromCart(medicine: Medicine): void {
    const index = this._cart.findIndex(item => item.MedicineId === medicine.MedicineId);
    if (index !== -1) {
      this._cart.splice(index, 1);
      this.cart.next(this._cart);
    }
  }
  constructor() { }
}
