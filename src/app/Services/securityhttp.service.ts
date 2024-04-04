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
    response=this.http.get<SecurityResponse>(`${this.url}api/Security/register`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  login(user:LoginUser):Observable<SecurityResponse>{
    let response:Observable<SecurityResponse>;
    response=this.http.get<SecurityResponse>(`${this.url}api/Security/login`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

}
