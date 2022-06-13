import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getServices():Observable<any>
  {
    return this.http.get("http://localhost:4500/services");
  }
  
  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/details/"+id);
  }

  httpOptions:any;

  postEnquiry(obj:any):Observable<any>{

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post("http://localhost:4500/enquiries",obj,this.httpOptions);
  }


}