import { Component, OnInit } from '@angular/core';
import { StoreOwner } from '../../../Models/app.user.model';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';
import { StoreownerformComponent } from '../storeownerform/storeownerform.component';
import { RouterModule } from '@angular/router';
import { AdminhttpService } from '../../../Services/adminhttp.service';

@Component({
  selector: 'app-storeownerdetails',
  standalone: true,
  imports: [SuperadminheaderComponent, StoreownerformComponent, RouterModule],
  templateUrl: './storeownerdetails.component.html',
  styleUrl: './storeownerdetails.component.css'
})
export class StoreownerComponent implements OnInit{
  storeowners: StoreOwner[];
  canDelete: boolean = false;
  storeowner: StoreOwner;
  message: string;

  constructor(private adminservice: AdminhttpService){
    this.message = "";
    this.storeowners = new Array<any>();
    this.storeowner = new StoreOwner(3,"Deepak","deepak@gmail.com",2);
    // this.storeowners.push(
    //   { OwnerId: 2, Name: "Omkar", Email:"omkar@gmail.com", BranchName: "Bharuch"}
    // )
  }

  ngOnInit(): void {
    this.adminservice.getStoreOwner().subscribe({
      next: (response) => {
        this.storeowners = response.records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of store owners. Please try again"+ this.message);
      }
    })
  }

  editRow(): void{

  }
  deleteRow(): void{

  }
  
}
