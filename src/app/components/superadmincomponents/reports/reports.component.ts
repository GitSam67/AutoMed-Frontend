import { Component, OnInit } from '@angular/core';
import { Order } from '../../../Models/app.orders.model';
import { CommonModule } from '@angular/common';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';
import { SadminsidepanelComponent } from '../../reusablecomponents/sadminsidepanel/sadminsidepanel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [SuperadminheaderComponent, SadminsidepanelComponent, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  orders: Order[] = [];
  salesAmount: number = 0;
  message: string;
  branchName: Map<number, string>;
  token:any;
  role:any;

  constructor(private adminservice:AdminhttpService, private router:Router) {
        this.orders = new Array<Order>();
        this.salesAmount = 0;
        this.message = "";
        this.branchName = new Map<number, string>();
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.role = sessionStorage.getItem('role');
    if(this.token == null || this.role != 'SuperAdmin') {
      this.router.navigateByUrl('/login');
    }
    this.adminservice.getSalesReport(0, this.token).subscribe({
      next: (response) => {
        this.orders = response.Records;
        this.message = response.Message;
        console.log(this.message);
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching details of sales. Please try again"+ this.message);
      }
    })

    this.adminservice.getBranches(this.token).subscribe({
      next: (response) => {
          console.log(response);
          response.Records.forEach(record => {
            this.branchName.set(record.BranchId, record.BranchName);
          });
      },
      error: (error) => {
        this.message = `Error: ${error}`;
        alert("Error in fetching branch details. Please try again"+ this.message);
      }
    })
  }


}
