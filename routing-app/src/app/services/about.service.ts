import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }

  httpOptions:any;

  getFeedback():Observable<any>{
    return this.http.get("http://localhost:4500/feedbacks");
  }

  postReviews(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post("http://localhost:4500/feedbacks",obj,this.httpOptions);
   }
}
