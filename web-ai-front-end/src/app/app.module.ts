import { NgModule, NO_ERRORS_SCHEMA, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { UrlListPageComponent } from './url-list-page/url-list-page.component';
import { FooterComponent } from './footer/footer.component';
import { DetailUrlComponent } from './detail-url/detail-url.component';
import { LoadingTextComponent } from './extras/loading-text/loading-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { UserDataComponent } from './popups/user-data/user-data.component';
import { AboutComponent } from './popups/about/about.component';
import { ContactUsComponent } from './popups/contact-us/contact-us.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    UrlListPageComponent,
    FooterComponent,
    DetailUrlComponent,
    LoadingTextComponent,
    UserDataComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MarkdownModule.forRoot({
       sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild() ,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [],
  // schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
