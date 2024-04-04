import { Component } from '@angular/core';
import { Branch } from '../../../Models/app.model';
import { Router } from 'express';
import { AdminhttpService } from '../../../Services/adminhttp.service';

@Component({
  selector: 'app-branchdetailsform',
  standalone: true,
  imports: [],
  templateUrl: './branchdetailsform.component.html',
  styleUrl: './branchdetailsform.component.css'
})
export class BranchdetailsformComponent {
  branch: Branch;
  BranchName:string;
  Address:string;

  constructor(private branchservice: AdminhttpService, private router: Router) {
    this.branch = new Branch(0, '', '');
    this.BranchName = '', this.Address = '';
  }

  addBranch(): void {

    const newBr: Branch = {
      BranchId: 0,
      BranchName: this.BranchName,
      Address: this.Address
    };

    this.branchservice.addBranch(newBr).subscribe({
      next:(response)=>{
        this.branch = response.Record;
        alert(response.Message);
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
  }
}
