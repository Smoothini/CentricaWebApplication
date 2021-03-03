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



  getDistrictList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/district');
  }

  addDistrict(val:any){
    return this.http.post(this.APIUrl+'/district',val);
  }

  updateDistrict(id:string,val:any){
    return this.http.put(this.APIUrl+'/district/'+id,val);
  }
  
  deleteDistrict(val:any){
    return this.http.delete(this.APIUrl+'/district/'+val);
  }

  appendSecondary(districtID, spID){
    return this.http.post(this.APIUrl+'/district/appendsecondary/'+districtID+'/'+spID,null);
  }
  
  removeSecondary(districtID, spID){
    return this.http.delete(this.APIUrl+'/district/removesecondary/'+districtID+'/'+spID);
  }

  getPossibleSecondary(districtID):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/District/getPSSP/'+districtID);
  }

  getAssignedSecondary(districtID):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/District/getASSP/'+districtID);
  }
}
