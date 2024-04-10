import { Branch } from './../../../Models/app.model';
import { Component, OnInit } from '@angular/core';
import { StoreOwner } from '../../../Models/app.user.model';
import { StoreownerhttpService } from '../../../Services/storeownerhttp.service';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-storeownerform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './storeownerform.component.html',
  styleUrl: './storeownerform.component.css'
})
export class StoreownerformComponent implements OnInit {
  user: StoreOwner;
  name: string = '';
  email: string = '';
  role: string = 'StoreOwner';
  Branch: any = 0;
  token:any;

  constructor(private storeService: AdminhttpService, private router: Router) {
    this.user = new StoreOwner(0, '', '', 0);
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if(this.token == null) {
      this.router.navigateByUrl('/login');
    }
  }

  addStoreOwner(): void {

    const newUser: StoreOwner = {
      OwnerId: 0,
      OwnerName: this.name,
      Email: this.email,
      BranchId: this.Branch
    };

    this.storeService.addStoreOwner(newUser, this.token).subscribe({
      next:(response)=>{
        alert(response.Message);
        this.router.navigateByUrl('/storeownerdetails');
      },
      error:(error)=>{
        alert(`StoreOwner already exists...!!`);
        // alert(`Error: ${error.message}`);
      }
    });
  }
}
