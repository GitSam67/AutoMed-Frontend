import { Component } from '@angular/core';
import { StoreOwner } from '../../../Models/app.user.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { RouterModule } from '@angular/router';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';

@Component({
  selector: 'app-storeownerdetails',
  standalone: true,
  imports: [RouterModule, SuperadminheaderComponent],
  templateUrl: './storeownerdetails.component.html',
  styleUrl: './storeownerdetails.component.css'
})
export class StoreownerdetailsComponent {
  storeowners: StoreOwner[];
  canDelete: boolean = false;
  storeowner: StoreOwner;
  message: string;

  constructor(private adminservice: AdminhttpService){
    this.message = "";
    this.storeowners = new Array<any>();
    this.storeowner = new StoreOwner(3,"Deepak","deepak@gmail.com","Mumbai");
    this.storeowners.push(
      { OwnerId: 2, Name: "Omkar", Email:"omkar@gmail.com", BranchName: "Bharuch"}
    )
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

  ToggleDelete(): void{

  }
  deleteRow(): void{

  }
}
