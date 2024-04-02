import { Component } from '@angular/core';
import { Medicine } from '../../Models/app.medicine.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medlist',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './medlist.component.html',
  styleUrl: './medlist.component.css'
})
export class MedlistComponent {
  medicines: Medicine[];

  constructor(){
    this.medicines = new Array<any>();
    this.medicines.push(
      { MedicineId: "Med-001", MedicineName: "Paracetamol", Manufacturer: "SKPL", UnitPrice: 20},
      { MedicineId: "Med-002", MedicineName: "Levocetrizine", Manufacturer: "Ambica Pharma", UnitPrice: 100},
      { MedicineId: "Med-003", MedicineName: "Febrex Plus", Manufacturer: "Indoco Remedies Ltd", UnitPrice: 60}
    );
  }
}
