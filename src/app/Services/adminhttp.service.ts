import { HttpClient, HttpHeaders } from '@angular/common/http';
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

 getStoreOwner(token:any):Observable<APIResponse<any>>{
  console.log("service called");
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetStoreOwners`,{
      headers: headers
    });
    return response;
  }

  getStoreOwnerDetail(id:any,token:any):Observable<APIResponse<any>>{
    console.log("service called");
      let response:Observable<APIResponse<any>>;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetStoreOwners/${id}`,{
        headers: headers
      });
      return response;
    }

  addStoreOwner(owner:StoreOwner,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.post<APIResponse<any>>(`${this.url}api/SuperAdmin/AddStoreOwner`, owner, {
      headers: headers
    });
    return response;
  }

  editStoreOwner(id:number, owner:StoreOwner, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.put<APIResponse<any>>(`${this.url}api/SuperAdmin/EditStoreOwner/${id}`, owner, {
      headers: headers
    });
    return response;
  }

  deleteStoreOwner(id:number, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.delete<APIResponse<any>>(`${this.url}api/SuperAdmin/DeleteStoreOwner/${id}`,{
      headers: headers
    });
    return response;
  }

  getBranches(token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetBranches`,{
      headers: headers
    });
    return response;
  }

  addBranch(branch:Branch, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.post<APIResponse<any>>(`${this.url}api/SuperAdmin/AddBranch`, branch, {
      headers: headers
    });
    return response;
  }

  updateBranch(id:number, branch:Branch, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.put<APIResponse<any>>(`${this.url}api/SuperAdmin/UpdateBranch/${id}`, branch, {
      headers: headers
    });
    return response;
  }

  deleteBranch(id:number, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.delete<APIResponse<any>>(`${this.url}api/SuperAdmin/DeleteBranch/${id}`, {
      headers: headers
    });
    return response;
  }

  getMedicines(token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetMedicine`,{
      headers: headers
    });
    return response;
  }

  getMedicine(id:any, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetMedicine/${id}`,{
      headers: headers
    });
    return response;
  }

  addMedicine(med:Medicine, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.post<APIResponse<any>>(`${this.url}api/SuperAdmin/AddMedicine`, med, {
      headers: headers
    });
    return response;
  }

  updateMedicine(id:number, med:Medicine, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.put<APIResponse<any>>(`${this.url}api/SuperAdmin/UpdateMedicine/${id}`, med , {
      headers: headers
    });
    return response;
  }

  deleteMedicine(id:number, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.delete<APIResponse<any>>(`${this.url}api/SuperAdmin/RemoveMedicine/${id}`,{
      headers:headers
    });
    return response;
  }

  getSalesReport(id:any, token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/SuperAdmin/GetSalesReport/${id}`,{
      headers:headers
    });
    return response;
  }

}
