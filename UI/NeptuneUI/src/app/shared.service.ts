import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; //used to hande async requests and responses

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://localhost:44306/api/";
readonly ImageURL = "https://localhost:44306/Images";

  constructor(private http:HttpClient) { }
}
