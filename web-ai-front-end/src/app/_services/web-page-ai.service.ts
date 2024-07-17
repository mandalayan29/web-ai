import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AIWebPageDetail } from '../_models/AIWebPageDetail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebPageAiService {

  apiURL= "http://localhost:8080"

  constructor(
    private http: HttpClient
  ) { }


  getWebpageAiDetail(url: string) : Observable<AIWebPageDetail> {
    return this.http.post<AIWebPageDetail>(this.apiURL+"/url/ai-detail", url);
  }
}
