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
  message: string;

  constructor(private adminservice: AdminhttpService){
    this.message = "";
    this.storeowners = new Array<StoreOwner>();
  }

  ngOnInit(): void {
    this.adminservice.getStoreOwner().subscribe({
      next: (response) => {
        console.log(response);
        this.storeowners = response.Records;
        console.log(this.storeowners);
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of store owners. Please try again"+ this.message);
      }
    })
  }

  editRow(id:number, owner:StoreOwner): void{
    this.adminservice.editStoreOwner(id, owner).subscribe({
      next: (response) => {
        console.log(response);
        this.storeowners = response.Records;
        console.log(this.storeowners);
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in updating details of store owners. Please try again"+ this.message);
      }
    })
  }
  deleteRow(id:number): void{
    this.adminservice.deleteStoreOwner(id).subscribe({
      next: (response) => {
        console.log(response);
        this.storeowners = response.Records;
        console.log(this.storeowners);
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in deleting details of store owners. Please try again"+ this.message);
      }
    })
  }
}
