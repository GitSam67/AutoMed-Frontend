import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../Models/app.apiresponse.model';
import { StoreOwner } from '../Models/app.user.model';
import { Branch } from '../Models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AdminhttpService {

  private url:string;

  constructor(private http:HttpClient) {

  this.url='https://localhost:7243/'
 }

 getStoreOwner():Observable<APIResponse<StoreOwner>>{
    let response:Observable<APIResponse<StoreOwner>>;
    response=this.http.get<APIResponse<StoreOwner>>(`${this.url}api/SuperAdmin/GetStoreOwners`,{
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


}
