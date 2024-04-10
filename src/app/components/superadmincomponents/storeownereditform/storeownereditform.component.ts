import { Component, OnInit } from '@angular/core';
import { StoreOwner } from '../../../Models/app.user.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-storeownereditform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './storeownereditform.component.html',
  styleUrl: './storeownereditform.component.css'
})
export class StoreownereditformComponent implements OnInit{
  user: StoreOwner;
  name: any;
  email: any;
  Branch: any = 0;
  ownerId: any = 0;
  message: string = '';
  token:any;

  constructor(private storeService: AdminhttpService, private router: Router) {
    this.user = new StoreOwner(0, '', '', 0);
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if(this.token == null) {
      this.router.navigateByUrl('/login');
    }
    this.ownerId = sessionStorage.getItem('ownerId');
    this.storeService.getStoreOwnerDetail(this.ownerId, this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.name = response.Record.OwnerName;
        this.email = response.Record.Email;
        this.Branch = response.Record.BranchId;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in updating details of store owners. Please try again"+ this.message);
      }
    });
  }

  editStoreOwner(): void {

    if(this.name == null && this.email == null && this.Branch == 0) {
      alert("Fields must be not null..!!");
      return;
    }

    if (this.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        alert('Invalid email format');
        return;
      }
    }

    const owner: StoreOwner = {
      OwnerId: 0,
      OwnerName: this.name,
      Email: this.email,
      BranchId: this.Branch
    };


    this.storeService.editStoreOwner(this.ownerId, owner, this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.Message;
        console.log(this.message);
        alert("Owner details updated successfully");
        this.router.navigateByUrl('/storeownerdetails');
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in updating details of store owners. Please try again"+ this.message);
      }
    })
  }
}

