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
  name: string = '';
  email: string = '';
  Branch: any = 0;
  ownerId: any = 0;
  message: string = '';

  constructor(private storeService: AdminhttpService, private router: Router) {
    this.user = new StoreOwner(0, '', '', 0);
  }

  ngOnInit(): void {
    this.ownerId = sessionStorage.getItem('ownerId');
    this.storeService.getStoreOwnerDetail(this.ownerId).subscribe({
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

    const owner: StoreOwner = {
      OwnerId: 0,
      OwnerName: this.name,
      Email: this.email,
      BranchId: this.Branch
    };


    this.storeService.editStoreOwner(this.ownerId, owner).subscribe({
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
