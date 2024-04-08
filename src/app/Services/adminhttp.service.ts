import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../Models/app.apiresponse.model';
import { StoreOwner } from '../Models/app.user.model';
import { Branch } from '../Models/app.model';
import { Medicine } from '../Models/app.medicine.model';

@Injectable({
  providedIn: 'root'
})
export class AdminhttpService {

  private url:string;

  constructor(private http:HttpClient) {

  this.url='https://localhost:7243/'
 }

 getStoreOwner():Observable<APIResponse<any>>{
  console.log("service called");
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetStoreOwners`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getStoreOwnerDetail(id:any):Observable<APIResponse<any>>{
    console.log("service called");
      let response:Observable<APIResponse<any>>;
      response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetStoreOwners/${id}`,{
        headers:{
          'Content-Type':'application/json'
        }
      });
      return response;
    }

  addStoreOwner(owner:StoreOwner):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.post<APIResponse<any>>(`${this.url}api/SuperAdmin/AddStoreOwner`, owner, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  editStoreOwner(id:number, owner:StoreOwner):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.put<APIResponse<any>>(`${this.url}api/SuperAdmin/EditStoreOwner/${id}`, owner, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  deleteStoreOwner(id:number):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.delete<APIResponse<any>>(`${this.url}api/SuperAdmin/DeleteStoreOwner/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getBranches():Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetBranches`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  addBranch(branch:Branch):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.post<APIResponse<any>>(`${this.url}api/SuperAdmin/AddBranch`, branch, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  updateBranch(id:number, branch:Branch):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.put<APIResponse<any>>(`${this.url}api/SuperAdmin/UpdateBranch/${id}`, branch, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  deleteBranch(id:number):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.delete<APIResponse<any>>(`${this.url}api/SuperAdmin/DeleteBranch/${id}`, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getMedicines():Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetMedicine`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getMedicine(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetMedicine/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  addMedicine(med:Medicine):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.post<APIResponse<any>>(`${this.url}api/SuperAdmin/AddMedicine`, med, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  updateMedicine(id:number, med:Medicine):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.put<APIResponse<any>>(`${this.url}api/SuperAdmin/UpdateMedicine/${id}`, med , {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  deleteMedicine(id:number):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.delete<APIResponse<any>>(`${this.url}api/SuperAdmin/RemoveMedicine/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getSalesReport(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetSalesReport/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

}
