import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  backendURL: string= "http://localhost:8080"
  constructor(
    private http: HttpClient
  ) { }

  getChatBotResponse(body: any) {
    return this.http.post(this.backendURL+"/chatBot/getResponse", body, {responseType: 'text'});
  }
}
