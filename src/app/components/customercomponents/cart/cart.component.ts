import { Component } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { CartService } from '../../../Services/cart.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Medicine[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(cart => this.cart = cart);
  }

  removeFromCart(medicine: Medicine): void {
    this.cartService.removeFromCart(medicine);
  }
}
