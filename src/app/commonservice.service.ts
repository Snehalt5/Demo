import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommonserviceService {
  
  // Define API
  apiURL = 'http://httpbin.org';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getProduct(): Observable<any>{
    let Url='http://imsuat.calibehr.com'
       return this.http.get(Url+ '/json/product');
   }

  public getAllProduct() {
    let Url='http://imsuat.calibehr.com'
    return this.http.get(Url+ '/json/product');

  }

}