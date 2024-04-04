import { Component } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';

@Component({
  selector: 'app-medicinedetails',
  standalone: true,
  imports: [SuperadminheaderComponent],
  templateUrl: './medicinedetails.component.html',
  styleUrl: './medicinedetails.component.css'
})
export class MedicinedetailsComponent {
  medicines: Medicine[];
  message: string;
  constructor(){
    this.medicines = new Array<any>();
    this.message = "";
  }


  editRow(): void{

  }
  deleteRow(): void{

  }
}
