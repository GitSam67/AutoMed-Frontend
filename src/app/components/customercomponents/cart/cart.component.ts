import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerhttpService } from '../../../Services/customerhttp.service';
import { SecurityhttpService } from '../../../Services/securityhttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: Map<string, number>;
  priceMap: Map<string, number>;
  amtMapper: Map<string, number>;
  price: number = 0;
  total: number = 0;
  claim:number = 0;
  actualClaim: number = 0;
  branchId: number = 0;
  token:any;
  customerId: number = 0;
  message:any;

  constructor(private userService:SecurityhttpService, private customerService: CustomerhttpService, private router:Router){
    this.cartItems = new Map<string, number>();
    this.priceMap = new Map<string, number>();
    this.amtMapper = new Map<string, number>();
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if(this.token == null) {
      this.router.navigateByUrl('/login');
    }

    let serialized = localStorage.getItem('cartItems');
    if (serialized) {
      let arrayFromStorage = JSON.parse(serialized);
      this.cartItems = new Map<string, number>(arrayFromStorage);
      console.log(this.cartItems);
    }

    let serial = localStorage.getItem('priceMapper');
    if(serial) {
      let arrayFromPriceMap = JSON.parse(serial);
      this.priceMap = new Map<string, number>(arrayFromPriceMap);
      console.log(this.priceMap);
    }

    let arr = Array.from(this.cartItems.entries());
    arr.forEach(record => {
      console.log(this.priceMap.get(record[0]));
      this.price = Number(this.priceMap.get(record[0]));
      console.log(record[1]);
      this.amtMapper.set(record[0], this.price*record[1]);
      this.total += Number(this.price*record[1]);
      console.log(this.total);
    });

  }

  save(): void{
    if(this.claim < 0 || this.claim > this.total) {
      alert("Claim exceeds total amount..!!");
      return;
    }
    this.actualClaim = this.claim;
  }

  remove(cart:any):void{
    alert(`Order item: ${cart} will be removed from cart.`);
    this.cartItems.delete(cart);
    let arrayFromMap = Array.from(this.cartItems.entries());
    let serialized = JSON.stringify(arrayFromMap);
    localStorage.setItem('cartItems', serialized);
    window.location.reload();
  }

  buyNow(): void{

    this.branchId = Number(sessionStorage.getItem('branchId'));
    this.userService.getUserInfo(this.token).subscribe({
    next:(response:any)=>{
      console.log(response);
      this.customerId = response.CustomerId;
      console.log(this.cartItems.size);
      if(this.cartItems.size > 0){
        console.log("this executed");
        console.log(this.customerId);
        console.log(this.actualClaim);
        console.log(this.branchId);
        const orderObject = Object.fromEntries(this.cartItems.entries());
        console.log(orderObject);
        this.customerService.generateMedicalBill(this.customerId, orderObject, this.actualClaim, this.branchId, this.token).subscribe({
          next: (response) => {
            console.log(response);
            alert(`Purchase Amount of ₹ ${response} executed successfully..!!`);
            this.router.navigateByUrl('/orders');
          },
          error: (error) => {
            this.message = `Error: ${error}`;
            alert("Error in executing order. Please try again"+ this.message);
          }
        })
      }
    },
    error:(error)=>{
      alert(`Error: ${error}`);
    }
  })

  }

}
