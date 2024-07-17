import { Component, OnInit } from '@angular/core';
import { UrlService } from '../_services/url.service';
import { WebPageRequest } from '../_models/WebPageRequest';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-list-page',
  templateUrl: './url-list-page.component.html',
  styleUrls: ['./url-list-page.component.scss']
})
export class UrlListPageComponent implements OnInit{
  urlList: WebPageRequest[]= [];
  displayedColumns: string[] = ['no', 'url', 'name', 'open'];
  constructor(
    private urlService: UrlService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.urlService.getURLList().subscribe(
      res=> {
        // console.log(res);
        this.urlList= res;
        
        
      }
    )

    

  }

  openLink(data: WebPageRequest) {
    let url= data.url;
    localStorage.setItem("url", url);
    this.router.navigateByUrl("/url");
  }

}
