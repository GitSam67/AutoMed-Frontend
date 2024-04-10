import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppUser, LoginUser } from '../../Models/app.security.model';
import { SecurityhttpService } from '../../Services/securityhttp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  loginForm: FormGroup;
  user: LoginUser;
  email: any;
  password: any;

  constructor(private securityService: SecurityhttpService, private router: Router, private formBuilder: FormBuilder) {
    this.user = new LoginUser('', '');
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  login(): void {

    if(this.email == null && this.password == null) {
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

    const authUser: LoginUser = {
      Email: this.email,
      Password: this.password
    };

    this.securityService.login(authUser).subscribe({
      next:(response)=>{
        console.log(response);
        sessionStorage.setItem('token',response.Token);
        sessionStorage.setItem('role',response.Role);
        alert(response.Message);

        if(sessionStorage.getItem('role') == "SuperAdmin")
          this.router.navigateByUrl('/superadmin');
        else if(sessionStorage.getItem('role') == "StoreOwner")
          this.router.navigateByUrl('/storeowner');
        else if(sessionStorage.getItem('role') == "Customer")
          this.router.navigateByUrl('/customer');
        else
          this.router.navigateByUrl('/');
      },
      error:(error)=>{
        alert(`Error: Login failed..!! Please Try again`);
      }
    });
  }
}
