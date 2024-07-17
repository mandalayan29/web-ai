import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailUrlComponent } from './detail-url/detail-url.component';
import { UrlListPageComponent } from './url-list-page/url-list-page.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "url", component: DetailUrlComponent },
  { path: "list", component: UrlListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
