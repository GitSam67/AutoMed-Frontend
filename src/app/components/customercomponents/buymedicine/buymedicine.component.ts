import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { Medicine } from '../../../Models/app.medicine.model';

@Component({
  selector: 'app-buymedicine',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './buymedicine.component.html',
  styleUrl: './buymedicine.component.css'
})
export class BuymedicineComponent {
  medicines: Medicine[];
  message: string;
  constructor(){
    this.medicines = new Array<any>();
    this.message = "";
  }

  buyMedicine(): void{
    
  }

}
