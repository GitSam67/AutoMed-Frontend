import { Component, OnInit } from '@angular/core';
import { AdminhttpService } from '../../../Services/adminhttp.service';

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

  constructor(private adminservice:AdminhttpService){
    this.salesAmount = 0;
    this.message = "";
  }

  ngOnInit(): void {

  this.adminservice.getSalesReport(0).subscribe({
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
