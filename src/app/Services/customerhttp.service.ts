import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../Models/app.apiresponse.model';
import { Branch } from '../Models/app.model';
import { Customer } from '../Models/app.user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {
  private url:string;

  constructor(private http:HttpClient) {

  this.url='https://localhost:7243/'
 }

 addCustomer(customer:Customer):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.post<APIResponse<any>>(`${this.url}api/Customer/AddCustomer`, customer ,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getBranches():Observable<APIResponse<Branch>>{
    let response:Observable<APIResponse<Branch>>;
    response=this.http.get<APIResponse<Branch>>(`${this.url}api/SuperAdmin/GetBranches`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  checkAvailability(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/Customer/CheckAvailableMedicines${id}`, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  generateMedicalBill(id:any, orders:any, claim:number, branchName:string):Observable<APIResponse<any>>{
    const requestBody = {
      id: id,
      orders: orders,
      claim: claim,
      branchName: branchName
    };
    let response:Observable<APIResponse<any>>;
    response=this.http.post<APIResponse<any>>(`${this.url}api/Customer/GenerateMedicalBill${id}`, requestBody, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  viewMedicalBill(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/Customer/ViewMedicalBill${id}`, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

}
