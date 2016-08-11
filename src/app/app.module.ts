import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { appRouterProviders } from "./app.routes";
import { RouterModule } from "@angular/router";
import { CmpntComponent } from './shared/cmpnt/cmpnt.component';

@NgModule({
  declarations   : [
    AppComponent,
    DashboardComponent,
    CmpntComponent
  ],
  imports        : [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers      : [
    appRouterProviders,
  ],
  entryComponents: [ AppComponent ],
  bootstrap      : [ AppComponent ]
})
export class AppModule {
}
