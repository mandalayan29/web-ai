import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../_services/url.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDataComponent } from '../popups/user-data/user-data.component';
import { WebPageRequest } from '../_models/WebPageRequest';
import { AboutComponent } from '../popups/about/about.component';
import { ContactUsComponent } from '../popups/contact-us/contact-us.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  summary: string= ""
  url: string= "";
  isLoading: boolean= false;

  constructor(
    private urlService: UrlService,
    private router: Router,
    private matDialog: MatDialog
  ){}

  ngOnInit(): void {
    this.urlService.getURLList().subscribe(
      res=> {
        this.list= res
      }
    )
  }

  summaryGenerated: boolean= false;
  errorOccured: boolean= false;
  list: WebPageRequest[]=[];
  getSummary(url: string) {
    this.url= url;
    this.summaryGenerated= true;
    this.errorOccured= false;
    this.isLoading= true;
    localStorage.setItem("url", url);
    this.urlService.getURLSummary(url).subscribe(
      (res: any)=> {
        this.errorOccured= false;
        this.summary= res.body
        this.isLoading= false;
      },
      err=> {
        this.isLoading= false;
        this.summaryGenerated= false;
        this.errorOccured= true;
      }
    )
  }

  openUrlDetailPage(){
    this.matDialog.open(UserDataComponent)
    // this.router.navigateByUrl("/url")
  }

  reset() {
    this.summary=""
    this.summaryGenerated= false;
    this.isLoading= false;
    this.url=""
  }



  


}
