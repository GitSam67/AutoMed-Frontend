import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../Models/app.apiresponse.model';
import { Medicine } from '../Models/app.medicine.model';
import { Branch } from '../Models/app.model';
import { Order } from '../Models/app.orders.model';
import { StoreOwner } from '../Models/app.user.model';

@Injectable({
  providedIn: 'root'
})
export class StoreownerhttpService {
  private url:string;

  constructor(private http:HttpClient) {

  this.url='https://localhost:7243/'
 }

 placeOrder(id:any, orders:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.post<APIResponse<any>>(`${this.url}api/StoreOwner/PlaceOrder/${id}`, orders ,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  removeStock(id:any, orders:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.put<APIResponse<any>>(`${this.url}api/StoreOwner/RemoveStock/${id}`, orders ,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getInventory(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/GetInventory/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getCashBalance(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/GetCashBalance/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  getTotalSales(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/GetTotalSales/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  // getBranches():Observable<APIResponse<Branch>>{
  //   let response:Observable<APIResponse<Branch>>;
  //   response=this.http.get<APIResponse<Branch>>(`${this.url}api/SuperAdmin/GetBranches`,{
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   });
  //   return response;
  // }


  getSalesReport(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/GetSalesReport/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  checkForExpiry(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/CheckForExpiry/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  checkForStockLevel(id:any):Observable<APIResponse<any>>{
    let response:Observable<APIResponse<any>>;
    response=this.http.get<APIResponse<any>>(`${this.url}api/StoreOwner/CheckForStockLevel/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

}
