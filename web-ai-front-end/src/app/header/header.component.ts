import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../popups/about/about.component';
import { ContactUsComponent } from '../popups/contact-us/contact-us.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private matDialog: MatDialog
  ) { }

  openAbout() {
    this.matDialog.open(AboutComponent)
  }

  openContact() {
    this,this.matDialog.open(ContactUsComponent)
  }

}
