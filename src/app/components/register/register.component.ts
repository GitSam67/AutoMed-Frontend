import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// import { UserService } from '../../Services/user-service';
import { User } from '../../Models/app.user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // name: string = '';
  // email: string = '';
  // role: string = 'Customer';
  // password: string = '';
  // confirmPassword: string = '';

  // constructor(private userService: UserService, private router: Router) { }

  // register(): void {
    // if (this.password !== this.confirmPassword) {
    //   alert('Passwords do not match');
    //   return;
    // }

    // const newUser: User = {
    //   CustomerName: this.name,
    //   Email: this.email,
    //   Age: '',
    //   Gender: '',
    //   BloodGroup: '',
    //   ContactNo: '',
    //   Address: '',
    //   Prescription: '',
    //   Password: this.password
    // };

    // this.userService.register(newUser).subscribe(
    //   () => {
    //     alert('Registration successful');
    //     this.router.navigate(['/login']); 
    //   },
    //   (error) => {
    //     console.error('Registration failed:', error);
    //     alert('Registration failed. Please try again later.');
    //   }
    // );
//   }
}
