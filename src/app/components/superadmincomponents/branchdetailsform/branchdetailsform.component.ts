import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../Models/app.model';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branchdetailsform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './branchdetailsform.component.html',
  styleUrl: './branchdetailsform.component.css'
})
export class BranchdetailsformComponent implements OnInit {
  branch: Branch;
  BranchName:any;
  Address:any;
  token:any;

  constructor(private branchservice: AdminhttpService, private router: Router) {
    this.branch = new Branch(0, '', '');
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if(this.token == null) {
      this.router.navigateByUrl('/login');
    }
  }

  addBranch(): void {

    if(this.BranchName == null && this.Address == null) {
      alert("Fields must be not null..!!");
      return;
    }

    const newBr: Branch = {
      BranchId: 0,
      BranchName: this.BranchName,
      Address: this.Address
    };

    this.branchservice.addBranch(newBr, this.token).subscribe({
      next:(response)=>{
        this.branch = response.Record;
        alert(response.Message);
        this.router.navigateByUrl('/branchdetails');
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
  }
}
