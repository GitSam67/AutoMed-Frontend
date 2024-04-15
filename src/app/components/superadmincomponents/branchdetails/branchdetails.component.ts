import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../Models/app.model';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { Router, RouterModule } from '@angular/router';
import { Medicine } from '../../../Models/app.medicine.model';
import { tick } from '@angular/core/testing';

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
  token:any;
  role:any;

  constructor(private adminservice:AdminhttpService, private router:Router){
    this.message="";
    this.branches = new Array<any>();
    this.medicines = new Array<any>();
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.role = sessionStorage.getItem('role');
    if(this.token == null || this.role != 'SuperAdmin') {
      this.router.navigateByUrl('/login');
    }
    this.adminservice.getBranches(this.token).subscribe({
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
    this.adminservice.updateBranch(id, branch, this.token).subscribe({
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
    alert(`Confirm delete for branch with id: ${id} ?`);
    this.adminservice.deleteBranch(id, this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.branches = response.Records;
        console.log(this.branches);
        this.message = response.Message;
        console.log(this.message);
        window.location.reload();
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in deleting branch. Please try again"+ this.message);
      }
    })

  }
}
