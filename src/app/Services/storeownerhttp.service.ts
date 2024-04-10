import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../Models/app.apiresponse.model';

@Injectable({
  providedIn: 'root'
})
export class StoreownerhttpService {
  private url:string;

  constructor(private http:HttpClient) {

  this.url='https://localhost:7243/'
 }

 placeOrder(orders:any, id:any,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.post<APIResponse<any>>(`${this.url}api/StoreOwner/PlaceOrder/${id}`, orders ,{
      headers:headers
    });
    return response;
  }

  removeStock(id:any, orders:any,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.put<APIResponse<any>>(`${this.url}api/StoreOwner/RemoveStock/${id}`, orders ,{
      headers:headers
    });
    return response;
  }

  getInventory(id:any,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/GetInventory/${id}`,{
      headers:headers
    });
    return response;
  }

  getCashBalance(id:any,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/GetCashBalance/${id}`,{
      headers:headers
    });
    return response;
  }

  getTotalSales(id:any,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/GetTotalSales/${id}`,{
      headers:headers
    });
    return response;
  }

  getSalesReport(id:any,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/GetSalesReport/${id}`,{
      headers:headers
    });
    return response;
  }

  checkForExpiry(id:any,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/CheckForExpiry/${id}`,{
      headers:headers
    });
    return response;
  }

  checkForStockLevel(id:any,token:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/CheckForStockLevel/${id}`,{
      headers:headers
    });
    return response;
  }

}
