import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  newApiUrl = "https://newsapi.org/v2/everything?q=apple&from=2024-01-30&to=2024-01-30&sortBy=popularity&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2";
  newtechApiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2024-01-03&sortBy=publishedAt&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  newbusinessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  newtechCrunceApiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  newdomainApiUrl = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  topHeading(): Observable<any>
  {
    return this._http.get(this.newApiUrl)
  }
  techHeading(): Observable<any>
  {
    return this._http.get(this.newtechApiUrl)
  }
  businessHeading(): Observable<any>
  {
    return this._http.get(this.newbusinessApiUrl)
  }
  techcrunceHeading(): Observable<any>
  {
    return this._http.get(this.newtechCrunceApiUrl)
  }
  domainHeading(): Observable<any>
  {
    return this._http.get(this.newdomainApiUrl)
  }
  constructor(private _http:HttpClient) { }
}
