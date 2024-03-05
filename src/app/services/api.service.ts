import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) {}

   // any is not good to use so created types.ts file.
   get<T>(url:string , option:Options):Observable<T>{
      return this.httpClient.get<T>(url,option) as Observable<T>;
    // Invoaking the httpclient get method. first parameter is url and second one is options.
    }
}
