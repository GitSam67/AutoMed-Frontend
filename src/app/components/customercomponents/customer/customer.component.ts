import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { BuymedicineComponent } from '../buymedicine/buymedicine.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [HeaderComponent, BuymedicineComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
