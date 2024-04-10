import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../../reusablecomponents/header/header.component';
import { Medicine } from '../../../Models/app.medicine.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { CustomerhttpService } from '../../../Services/customerhttp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecurityhttpService } from '../../../Services/securityhttp.service';
import { Branch, Inventory } from '../../../Models/app.model';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-buymedicine',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './buymedicine.component.html',
  styleUrl: './buymedicine.component.css'
})
export class BuymedicineComponent implements OnInit {
  medicines: Medicine[];
  selectedMedicines: Map<string, number>;
  message: string;
  quantity: number = 0;
  branches: Branch[];
  branchId: any = 0;
  token: any;
  customerId: number;
  availableMedicines: Inventory[];
  selectMed:boolean = false;
  name:any = '';
  qty:any = 0;
  branchIdVar: number = 0;
  medMapper: Map<any, any>;
  qtyMapper: Map<any, any>;
  priceMapper: Map<any, any>;
  branchMapper:  Map<number, string>;
  branchSelect:boolean = false;

  constructor(private adminService: AdminhttpService, private customerService: CustomerhttpService, private router: Router){
    this.medicines = new Array<any>();
    this.message = "";
    this.token = "";
    this.branches = new Array<any>();
    this.selectedMedicines = new Map<string, number>();
    this.availableMedicines = new Array<any>();
    this.customerId = 0;
    this.medMapper = new Map<any, any>();
    this.qtyMapper = new Map<any, any>();
    this.branchMapper = new Map<number, string>();
    this.priceMapper = new Map<any, any>();
  }

  addToCart(medicineName: string, quantity: number) {
    if(this.qty <= 0 || this.qty > this.qtyMapper.get(this.medMapper.get(medicineName))) {
      alert(`Invalid Quantity`);
      return;
    }
    this.selectedMedicines.set(medicineName, quantity);
    alert(`${quantity} units of medicine ${medicineName} have been added to cart`);
    console.log(this.selectedMedicines);
    if(this.selectedMedicines.size > 0) {
      this.branchSelect = true;
    }
    else {
      this.branchSelect = false;
    }
    this.selectMed = !this.selectMed;
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if(this.token == null) {
      this.router.navigateByUrl('/login');
    }
    this.adminService.getBranches(this.token).subscribe({
      next: (response) => {
        this.branches = response.Records;
        this.branches.forEach(branch => {
          this.branchMapper.set(branch.BranchId, branch.BranchName);
        });
        this.message = response.Message;
        console.log(this.branches);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    });

    this.adminService.getMedicines(this.token).subscribe({
      next: (response) => {
        this.medicines = response.Records;
        console.log(this.medicines);
        this.message = response.Message;
        this.medicines.forEach(record => {
          this.medMapper.set(record.Name, record.MedicineId);
          this.priceMapper.set(record.Name, record.UnitPrice);
        });
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of Medicines. Please try again" + this.message);
      }
    });

  }

  onBranchIdChange(): void {
    console.log(this.branchId);
    this.customerService.checkAvailability(this.branchId, this.token).subscribe({
      next: (response: any) => {
        this.availableMedicines = response.Records;
        console.log(this.availableMedicines);
        this.availableMedicines.forEach(record => {
          this.qtyMapper.set(record.MedicineId, record.Quantity);
        });
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    });
  }

  selectMedicine(med:any){
    this.selectMed = !this.selectMed;
    this.name = med;
    this.branchIdVar = Number(this.branchId);
    console.log(this.branchMapper.get(Number(this.branchId)));
  }



  goToCart(): void {
    console.log(this.selectedMedicines);
    let arrayFromMap = Array.from(this.selectedMedicines.entries());
    let serialized = JSON.stringify(arrayFromMap);
    localStorage.setItem('cartItems', serialized);

    let arrayFromPriceMap = Array.from(this.priceMapper.entries());
    let serializedPriceMap = JSON.stringify(arrayFromPriceMap);
    localStorage.setItem('priceMapper', serializedPriceMap);


    sessionStorage.setItem('branchId', this.branchId);

    this.router.navigateByUrl('/cart');
}

}
