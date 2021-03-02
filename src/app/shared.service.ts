import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44325/api";

  constructor(private http:HttpClient) { }

  getSalesManList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/salesperson');
  }

  addSalesMan(val:any){
    return this.http.post(this.APIUrl+'/salesperson',val);
  }

  updateSalesMan(id:string,val:any){
    return this.http.put(this.APIUrl+'/salesperson/'+id,val);
  }
  
  deleteSalesMan(val:any){
    return this.http.delete(this.APIUrl+'/salesperson/'+val);
  }

  
  
  getDistrict(val:any){
    return this.http.get(this.APIUrl+'/district/'+val);
  }

  getStoreList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/store');
  }

  addStore(val:any){
    return this.http.post(this.APIUrl+'/store',val);
  }

  updateStore(id:string,val:any){
    return this.http.put(this.APIUrl+'/store/'+id,val);
  }
  
  deleteStore(val:any){
    return this.http.delete(this.APIUrl+'/store/'+val);
  }
}
