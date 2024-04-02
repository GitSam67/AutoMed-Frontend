import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MedlistComponent } from '../medlist/medlist.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [HeaderComponent, MedlistComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
