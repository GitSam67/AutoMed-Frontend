import { Component } from '@angular/core';
import { Medicine } from '../../../Models/app.medicine.model';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medicinedetails',
  standalone: true,
  imports: [SuperadminheaderComponent, RouterModule],
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
