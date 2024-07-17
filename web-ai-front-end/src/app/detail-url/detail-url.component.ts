import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AIWebPageDetail } from '../_models/AIWebPageDetail';
import { WebPageAiService } from '../_services/web-page-ai.service';
import { ChatbotService } from '../_services/chatbot.service';
import { ChatbotQuestion } from '../_models/ChatBotQuestion';

@Component({
  selector: 'app-detail-url',
  templateUrl: './detail-url.component.html',
  styleUrls: ['./detail-url.component.scss', './chat-bot.scss']
})
export class DetailUrlComponent implements OnInit, AfterViewInit {

  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  chatProcessing: boolean= false;
  data:AIWebPageDetail= {
    "id": 0,
    "type": "loading...",
    "headline": "loading...",
    "webPageSummary": "loading...",
    "links": [],
    "images": [],
    "url": ""
};
  l= "loading";
  dataLoading: boolean= false;
  get loadingText() {
    let text="";
    // let 
    console.log(this.l);
    
    while(true) {
      return this.l.concat(".");
    }
  }

  chats: any[] = [ ];
  url: string= "";

  constructor(
    private webpageService: WebPageAiService,
    private chatbotService: ChatbotService
  ) { }
  ngAfterViewInit(): void {
    // try {
    //   let url: string = localStorage.getItem("url") || "";
    //   this.webpageService.getWebpageAiDetail(url).subscribe(
    //     res => {
    //       console.log(res);
    //     }
    //   )
    // } catch (e) {

    // }
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');\
    this.dataLoading= true;
    try {
      let url: string = localStorage.getItem("url") || "";
      this.url= url;
      this.webpageService.getWebpageAiDetail(url).subscribe(
        res => {
          this.data= res;
          this.dataLoading= false;
        }
      )
    } catch (e) {
      this.dataLoading= false;
    }

  }
  typedMessage: string = "";

  sendMessage() {
    this.chatProcessing= true;
    let object = {
      sender: "user",
      message: this.typedMessage
    }
    let body : ChatbotQuestion= {
      url: localStorage.getItem("url") || "",
      question: this.typedMessage
    }
    this.chats.push(object);
    this.typedMessage = "" 
    this.chatbotService.getChatBotResponse(body).subscribe(
      res=> {
        this.chats.push({
          sender: "chatbot",
          message: res
        })
        this.scrollToBottom();
        this.chatProcessing= false;
      }
    )
    this.scrollToBottom()
  }



  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll to bottom failed:', err);
    }
  }
  

}
