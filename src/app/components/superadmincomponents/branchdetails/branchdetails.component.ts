import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../Models/app.model';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';
import { AdminhttpService } from '../../../Services/adminhttp.service';

@Component({
  selector: 'app-branchdetails',
  standalone: true,
  imports: [SuperadminheaderComponent],
  templateUrl: './branchdetails.component.html',
  styleUrl: './branchdetails.component.css'
})
export class BranchdetailsComponent implements OnInit{
  branches: Branch[];
  message: string;
  canDelete: boolean = true;

  constructor(private adminservice:AdminhttpService){
    this.message="";
    this.branches = new Array<any>();
  }

  ngOnInit(): void {
    this.adminservice.getBranches().subscribe({
      next: (response) => {
        this.branches = response.Records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of branches. Please try again"+ this.message);
      }
    })
  }

  ToggleDelete(): void{

  }
  deleteRow(): void{

  }
}
