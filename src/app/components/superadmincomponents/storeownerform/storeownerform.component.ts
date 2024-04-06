import { Branch } from './../../../Models/app.model';
import { Component } from '@angular/core';
import { StoreOwner } from '../../../Models/app.user.model';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storeownerform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './storeownerform.component.html',
  styleUrl: './storeownerform.component.css'
})
export class StoreownerformComponent {
  user: StoreOwner;
  name: string = '';
  email: string = '';
  role: string = 'StoreOwner';
  Branch: any = 0;

  constructor(private storeService: AdminhttpService, private router: Router) {
    this.user = new StoreOwner(0, '', '', 0);
  }

  addStoreOwner(): void {

    const newUser: StoreOwner = {
      OwnerId: 0,
      OwnerName: this.name,
      Email: this.email,
      BranchId: this.Branch
    };

    this.storeService.addStoreOwner(newUser).subscribe({
      next:(response)=>{
        alert(response.Message);
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
  }
}
