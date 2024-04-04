import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppUser } from '../../Models/app.security.model';
import { SecurityhttpService } from '../../Services/securityhttp.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: AppUser;
  name: string = '';
  email: string = '';
  role: string = 'Customer';
  password: string = '';
  confirmPassword: string = '';

  constructor(private securityService: SecurityhttpService, private router: Router) {
    this.user = new AppUser('', '', '', '', '');
  }

  register(): void {

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const newUser: AppUser = {

      Name: this.name,
      Email: this.email,
      Role: this.role,
      Password: this.password,
      ConfirmPassword: this.confirmPassword
    };

    this.securityService.register(newUser).subscribe({
      next:(response)=>{
        alert(response.Message);
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
  }
}
