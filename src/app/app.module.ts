import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar.component';
import { ListComponent } from './components/users/list/list.component';
import { DetailsComponent } from './components/users/details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { Breadcrumb } from 'angular-crumbs';

const appRoutes: Routes =[
  { path: '', component: SidebarComponent },
  { path: 'users', component: ListComponent, data: {breadcrumb: 'Users'} },
  { path: 'user', component: DetailsComponent, data: {breadcrumb: 'User'} }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Breadcrumb
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
