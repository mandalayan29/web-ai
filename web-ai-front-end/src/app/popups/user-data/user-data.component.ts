import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WebPageRequest } from 'src/app/_models/WebPageRequest';
import { UrlService } from 'src/app/_services/url.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  name: string= "";
  email: string= "";
  url: string=""

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private urlRequestService: UrlService
  ) { }

  ngOnInit(): void {
    this.url= localStorage.getItem("url") || "";
  }

  submit() {
    let body: WebPageRequest= {
      name: this.name,
      email: this.email,
      url: this.url
    }
    this.urlRequestService.addRequest(body).subscribe(
      res=> {
        console.log(res);
      }
    )
    this.matDialog.closeAll();
    this.router.navigateByUrl("/url")
  }
}
