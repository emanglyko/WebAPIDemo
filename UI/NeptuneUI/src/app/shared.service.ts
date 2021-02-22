import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; //used to hande async requests and responses

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:5000/api";
readonly ImageURL = "http://localhost:5000/Images/";

  constructor(private http:HttpClient) { }

  GetBeverages():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Beverages');
  }

  AddBeverage(val:any) {
    return this.http.post(this.APIUrl + '/Beverages', val)
  }

  UpdateBeverage(val:any) {
    return this.http.put(this.APIUrl + '/Beverages/' + val.id, val)
  }

  DeleteBeverage(val:any) {
    return this.http.delete(this.APIUrl + '/Beverages/' + val.id)
  }

  GetBeverageTypes():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/BeverageTypes');
  }

  AddBeverageType(val:any) {
    return this.http.post(this.APIUrl + '/BeverageTypes', val)
  }

  UpdateBeverageType(val:any) {
    return this.http.put(this.APIUrl + '/BeverageTypes/' + val.id, val)
  }

  DeleteBeverageType(val:any) {
    return this.http.delete(this.APIUrl + '/BeverageTypes/' + val.id)
  }

  UploadImage(val:any) {
    return this.http.post(this.APIUrl + '/Beverages/upload', val)
  }
  
}
