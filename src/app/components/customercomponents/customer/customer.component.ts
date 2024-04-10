import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { BuymedicineComponent } from '../buymedicine/buymedicine.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [HeaderComponent, BuymedicineComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  token:any;

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if(this.token == null) {
      this.router.navigateByUrl('/login');
    }
  }

}
