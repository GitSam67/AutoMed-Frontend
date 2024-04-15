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
  name: any;
  email: any;
  role: string = 'Customer';
  password: any;
  confirmPassword: any;

  constructor(private securityService: SecurityhttpService, private router: Router) {
    this.user = new AppUser('', '', '', '', '');
  }

  register() {

    if(this.name == null && this.email == null && this.password == null && this.confirmPassword == null) {
      alert("Fields must be not null..!!");
      return;
    }

    if (this.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        alert('Invalid email format');
        return;
      }
    }

    if (this.password !== this.confirmPassword) {
      console.log(this.password);
      console.log(this.confirmPassword);
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
        sessionStorage.setItem('token',response.Token);
        sessionStorage.setItem('role',response.Role);
        const nameToStore = this.name || "Default Name";
        const nameAsString = String(nameToStore);
        sessionStorage.setItem('name', nameAsString);
        const emailtoStore = this.email || "Default Email";
        const emailasString = String(emailtoStore);
        sessionStorage.setItem('email', emailasString);
        this.router.navigate(['login'], {queryParams: { name: nameAsString , email: emailasString} });
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
  }
}
