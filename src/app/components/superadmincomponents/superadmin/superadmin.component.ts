import { Component, OnInit } from '@angular/core';
import { SadminsidepanelComponent } from '../../reusablecomponents/sadminsidepanel/sadminsidepanel.component';
import { Router, RouterModule } from '@angular/router';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';

@Component({
  selector: 'app-superadmin',
  standalone: true,
  imports: [SadminsidepanelComponent, RouterModule, SuperadminheaderComponent],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.css'
})
export class SuperadminComponent implements OnInit {
  token:any;

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if(this.token == null) {
      this.router.navigateByUrl('/login');
    }
  }
}
