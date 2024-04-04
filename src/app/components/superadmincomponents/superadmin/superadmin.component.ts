import { Component } from '@angular/core';
import { SadminsidepanelComponent } from '../../reusablecomponents/sadminsidepanel/sadminsidepanel.component';
import { RouterModule } from '@angular/router';
import { SuperadminheaderComponent } from '../../reusablecomponents/superadminheader/superadminheader.component';

@Component({
  selector: 'app-superadmin',
  standalone: true,
  imports: [SadminsidepanelComponent, RouterModule, SuperadminheaderComponent],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.css'
})
export class SuperadminComponent {

}
