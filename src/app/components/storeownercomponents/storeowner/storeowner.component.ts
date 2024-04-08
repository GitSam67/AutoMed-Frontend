import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';
import { StoreownersidepanelComponent } from '../../reusablecomponents/storeownersidepanel/storeownersidepanel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-storeowner',
  standalone: true,
  imports: [StoreownerheaderComponent, StoreownersidepanelComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './storeowner.component.html',
  styleUrl: './storeowner.component.css'
})
export class StoreownerComponent {
  showPurchaseForm: boolean = false;
  isNewCustomer: boolean = false;

  constructor(private router:Router){}

  showNewPurchaseForm() {
    this.showPurchaseForm = true;
  }

  setIsNewCustomer(value: boolean) {
    this.isNewCustomer = value;
    sessionStorage.clear();
    if(value) {
      this.router.navigateByUrl('/register');
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
}
