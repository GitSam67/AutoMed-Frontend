import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppUser } from '../../Models/app.security.model';
import { SecurityhttpService } from '../../Services/securityhttp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
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

  register() {

    if (this.password !== this.confirmPassword) {
      console.log(this.password);
      console.log(this.confirmPassword);
      alert('Passwords do not match');
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
        sessionStorage.setItem('name', this.name);
        sessionStorage.setItem('email', this.email);
        this.router.navigate(['customerform'], {queryParams: { name: this.name , email: this.email} });
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
  }
}
