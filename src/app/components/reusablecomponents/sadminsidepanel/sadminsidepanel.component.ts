import { Component, OnInit } from '@angular/core';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sadminsidepanel',
  standalone: true,
  imports: [],
  templateUrl: './sadminsidepanel.component.html',
  styleUrl: './sadminsidepanel.component.css'
})
export class SadminsidepanelComponent implements OnInit {
  salesAmount: number;
  message:string;
  token:any;
  role:any;

  constructor(private adminservice:AdminhttpService, private router: Router){
    this.salesAmount = 0;
    this.message = "";
  }

ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.role = sessionStorage.getItem('role');
    if(this.token == null || this.role != 'SuperAdmin') {
      this.router.navigateByUrl('/login');
    }
    console.log(this.token);
    this.adminservice.getSalesReport(0, this.token).subscribe({
    next: (response) => {
      response.Records.forEach(record => {
        this.salesAmount += record.TotalBill;
      });
      this.message = response.Message;
      console.log(this.message);
    },
    error: (error) => {
      this.message = `Error: ${error}`;
      alert("Error in fetching details of sales. Please try again"+ this.message);
    }
  })

}

}
