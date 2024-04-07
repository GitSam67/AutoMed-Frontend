import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../Models/app.model';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { RouterModule } from '@angular/router';
import { Medicine } from '../../../Models/app.medicine.model';

@Component({
  selector: 'app-branchdetails',
  standalone: true,
  imports: [SuperadminheaderComponent, RouterModule],
  templateUrl: './branchdetails.component.html',
  styleUrl: './branchdetails.component.css'
})
export class BranchdetailsComponent implements OnInit{
  branches: Branch[];
  message: string;
  canDelete: boolean = true;
  medicines: Medicine[];

  constructor(private adminservice:AdminhttpService){
    this.message="";
    this.branches = new Array<any>();
    this.medicines = new Array<any>();
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

  editRow(id:number, branch:any): void{
    this.adminservice.updateBranch(id, branch).subscribe({
      next: (response) => {
        console.log(response);
        this.branches = response.Records;
        console.log(this.branches);
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in updating details of branch. Please try again"+ this.message);
      }
    })
  }
  deleteRow(id:number): void{
    this.adminservice.deleteBranch(id).subscribe({
      next: (response) => {
        console.log(response);
        this.branches = response.Records;
        console.log(this.branches);
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in deleting branch. Please try again"+ this.message);
      }
    })

  }
}
