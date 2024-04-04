import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
