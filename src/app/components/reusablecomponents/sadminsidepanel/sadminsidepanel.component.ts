import { Component } from '@angular/core';

@Component({
  selector: 'app-sadminsidepanel',
  standalone: true,
  imports: [],
  templateUrl: './sadminsidepanel.component.html',
  styleUrl: './sadminsidepanel.component.css'
})
export class SadminsidepanelComponent {
  salesamount: number;

  constructor(){
    this.salesamount = 0;
  }
}
