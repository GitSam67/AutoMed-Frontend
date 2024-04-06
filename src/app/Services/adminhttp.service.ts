import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../Models/app.apiresponse.model';
import { StoreOwner } from '../Models/app.user.model';
import { Branch } from '../Models/app.model';
import { Medicine } from '../Models/app.medicine.model';
import { Order } from '../Models/app.orders.model';

@Injectable({
  providedIn: 'root'
})
export class AdminhttpService {

  private url:string;

  constructor(private http:HttpClient) {

  this.url='https://localhost:7243/'
 }

 getStoreOwner():Observable<APIResponse<StoreOwner>>{
  console.log("service called");
    let response:Observable<APIResponse<StoreOwner>>;
    response=this.http.get<APIResponse<StoreOwner>>(`${this.url}api/SuperAdmin/GetStoreOwners`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  addStoreOwner(owner:StoreOwner):Observable<APIResponse<StoreOwner>>{
    let response:Observable<APIResponse<StoreOwner>>;
    response=this.http.post<APIResponse<StoreOwner>>(`${this.url}api/SuperAdmin/AddStoreOwner`, owner, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  editStoreOwner(id:number, owner:StoreOwner):Observable<APIResponse<StoreOwner>>{
    let response:Observable<APIResponse<StoreOwner>>;
    response=this.http.put<APIResponse<StoreOwner>>(`${this.url}api/SuperAdmin/EditStoreOwner/${id}`, owner, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  deleteStoreOwner(id:number):Observable<APIResponse<StoreOwner>>{
    let response:Observable<APIResponse<StoreOwner>>;
    response=this.http.delete<APIResponse<StoreOwner>>(`${this.url}api/SuperAdmin/DeleteStoreOwner/${id}`,{
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

  addBranch(branch:Branch):Observable<APIResponse<Branch>>{
    let response:Observable<APIResponse<Branch>>;
    response=this.http.post<APIResponse<Branch>>(`${this.url}api/SuperAdmin/AddBranch`, branch, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getMedicines():Observable<APIResponse<Medicine>>{
    let response:Observable<APIResponse<Medicine>>;
    response=this.http.get<APIResponse<Medicine>>(`${this.url}api/SuperAdmin/GetMedicine`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  addMedicine(med:Medicine):Observable<APIResponse<Medicine>>{
    let response:Observable<APIResponse<Medicine>>;
    response=this.http.post<APIResponse<Medicine>>(`${this.url}api/SuperAdmin/AddMedicine`, med, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  updateMedicine(id:number, med:Medicine):Observable<APIResponse<Medicine>>{
    let response:Observable<APIResponse<Medicine>>;
    response=this.http.put<APIResponse<Medicine>>(`${this.url}api/SuperAdmin/UpdateMedicine/${id}`, med , {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  deleteMedicine(id:number):Observable<APIResponse<Medicine>>{
    let response:Observable<APIResponse<Medicine>>;
    response=this.http.delete<APIResponse<Medicine>>(`${this.url}api/SuperAdmin/RemoveMedicine/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getSales(id:any):Observable<APIResponse<Order>>{
    let response:Observable<APIResponse<Order>>;
    response=this.http.get<APIResponse<Order>>(`${this.url}api/SuperAdmin/GetSalesReport/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

}
