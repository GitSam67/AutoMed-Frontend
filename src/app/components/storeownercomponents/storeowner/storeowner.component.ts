import { Component } from '@angular/core';
import { StoreownerheaderComponent } from '../../reusablecomponents/storeownerheader/storeownerheader.component';

@Component({
  selector: 'app-storeowner',
  standalone: true,
  imports: [StoreownerheaderComponent],
  templateUrl: './storeowner.component.html',
  styleUrl: './storeowner.component.css'
})
export class StoreownerComponent {

}
