import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppUser, LoginUser } from '../../Models/app.security.model';
import { SecurityhttpService } from '../../Services/securityhttp.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: LoginUser;
  email: string = '';
  password: string = '';

  constructor(private securityService: SecurityhttpService, private router: Router) {
    this.user = new LoginUser('', '');
  }

  login(): void {

    const authUser: LoginUser = {

      Email: this.email,
      Password: this.password
    };

    this.securityService.login(authUser).subscribe({
      next:(response)=>{
        sessionStorage.setItem('token',response.Token);
        sessionStorage.setItem('role',response.Role);
        alert(response.Message);
      },
      error:(error)=>{
        alert(`Error: ${error}`);
      }
    });
    this.router.navigateByUrl('/');
  }
}
