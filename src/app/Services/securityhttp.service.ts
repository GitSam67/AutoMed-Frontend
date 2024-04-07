import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, SecurityResponse } from '../Models/app.apiresponse.model';
import { AppUser, LoginUser } from '../Models/app.security.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityhttpService {
  private url:string;

  constructor(private http:HttpClient) {

  this.url='https://localhost:7243/'
 }

 register(user:AppUser):Observable<SecurityResponse>{
    let response:Observable<SecurityResponse>;
    response=this.http.post<SecurityResponse>(`${this.url}api/Security/register`, user, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  login(user:LoginUser):Observable<SecurityResponse>{
    console.log("login service called");
    let response:Observable<SecurityResponse>;
    response=this.http.post<SecurityResponse>(`${this.url}api/Security/login`, user, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getUserInfo(token:string):Observable<APIResponse<object>>{
    let response:Observable<APIResponse<object>>;
    response=this.http.get<APIResponse<object>>(`${this.url}api/Security/GetCurrentUser/${token}`, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }


}
