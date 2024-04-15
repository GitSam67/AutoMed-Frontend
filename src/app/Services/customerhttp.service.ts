import { HttpClient, HttpHeaders } from '@angular/common/http';
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

 addCustomer(customer:Customer, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.post<APIResponse<any>>(`${this.url}api/Customer/AddCustomer`, customer ,{
      headers:headers
    });
    return response;
  }

  getBranches(token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetBranches`,
    {headers: headers});
    return response;
  }

  checkAvailability(id:any, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.post<APIResponse<any>>(`${this.url}api/Customer/CheckAvailableMedicines/${id}`, {
    }, {headers: headers});
    return response;
  }

  generateMedicalBill(id:any, orders:any, claim:any, branchId:any, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.post<APIResponse<any>>(`${this.url}api/Customer/GenerateMedicalBill/${id}/${branchId}/${claim}`, orders,
    {headers: headers});
    return response;
  }

  viewMedicalBill(id:any, orderId:any, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/Customer/ViewMedicalBill/${id}/${orderId}`, {
     headers: headers});
    return response;
  }

}
