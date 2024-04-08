import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdminhttpService } from '../../../Services/adminhttp.service';
import { CustomerhttpService } from '../../../Services/customerhttp.service';
import { Branch } from '../../../Models/app.model';
import { Customer } from '../../../Models/app.user.model';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customerform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './customerform.component.html',
  styleUrl: './customerform.component.css'
})
export class CustomerformComponent implements OnInit{
  branches: Branch[];
  message: string;
  unsubmittable = true;
  customer: Customer;
  customerForm: FormGroup;
  branchId: number;
  name: string;
  email: string;
  claim: number;

  constructor(private adminServ: AdminhttpService, private customerServ: CustomerhttpService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router){
    this.branches = new Array<any>();
    this.message = "";
    this.branchId = 0;
    this.name = "";
    this.email = "";
    this.claim = 0;
    this.customer = new Customer(0, "", "", "", "", "", "", "", "");
    this.customerForm = this.formBuilder.group({
      age: new FormControl(this.customer.Age, Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])),
      gender: new FormControl(this.customer.Gender, Validators.required),
      contactNo: new FormControl(this.customer.ContactNo, Validators.required),
      bloodGroup: new FormControl(this.customer.BloodGroup, Validators.required),
      address: new FormControl(this.customer.Address, Validators.required),
      prescription: new FormControl(this.customer.Prescription, Validators.required),
      claim: new FormControl(this.claim, Validators.compose([Validators.required, Validators.pattern('[0-9]+')]))
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe(params => {
      const emailParam = params.get('email');
      const nameParam = params.get('name');
      console.log(emailParam);
      console.log(nameParam);
      if (emailParam !== null) {
        this.email = emailParam;
      }
    
      if (nameParam !== null) {
        this.name = nameParam;
      }
    });
    
    this.adminServ.getBranches().subscribe({
      next: (response) => {
        this.branches = response.Records;
        this.message = response.Message;
        console.log(this.branches);
        this.unsubmittable = false;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    });

  }

  save(): void{
    console.log(this.branchId);
    const newCust: Customer = {
      CustomerId: 0,
      CustomerName: sessionStorage.getItem('name'),
      Email: sessionStorage.getItem('email'),
      Age: this.customerForm.controls['age'].value,
      Gender: this.customerForm.controls['gender'].value,
      BloodGroup: this.customerForm.controls['bloodGroup'].value,
      ContactNo: this.customerForm.controls['contactNo'].value,
      Address: this.customerForm.controls['address'].value,
      Prescription: this.customerForm.controls['prescription'].value
    };

    this.customerServ.addCustomer(newCust).subscribe({
      next:(response) => {
        this.message = response.Message;
        // console.log(this.message);
        // alert("Details added successfully")
        sessionStorage.setItem('branchId', JSON.stringify(this.branchId));
        sessionStorage.setItem('claim', JSON.stringify(this.claim));
        this.router.navigateByUrl('/customer');
      },
      error: (error) =>{
        this.message = error;
        // console.log(this.message);
        // alert(`Error occured : ${error}`);
      }
    })
  }
}


