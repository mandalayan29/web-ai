import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebPageRequest } from '../_models/WebPageRequest';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  backendURL= "http://localhost:8080"

  constructor(
    private http: HttpClient
  ) { }

  getURLSummary(url: string) : Observable<string>{
    return this.http.post<string>(this.backendURL+"/summary", url);
  }

  addRequest(body: WebPageRequest) {
    return this.http.post(this.backendURL+"/request", body);
  }

  getURLList() : Observable<WebPageRequest[]>{
    return this.http.get<WebPageRequest[]>(this.backendURL+"/list");
  }
}
