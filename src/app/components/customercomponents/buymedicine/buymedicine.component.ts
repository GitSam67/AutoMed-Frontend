import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { Medicine } from '../../../Models/app.medicine.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';

@Component({
  selector: 'app-buymedicine',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './buymedicine.component.html',
  styleUrl: './buymedicine.component.css'
})
export class BuymedicineComponent implements OnInit{
  medicines: Medicine[];
  message: string;
  constructor(private adminService: AdminhttpService){
    this.medicines = new Array<any>();
    this.message = "";
  }

  ngOnInit(): void {
    this.adminService.getMedicines().subscribe({
      next: (response) => {
        this.medicines = response.Records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of Medicines. Please try again"+ this.message);
      }
    })
  }

  buyMedicine(): void{
    
  }

}
