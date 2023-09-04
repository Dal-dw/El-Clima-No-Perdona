import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HttpAxiosPageModule } from './http-axios/http-axios-page.module';

import { HttpFetchPageModule } from './http-fetch/http-fetch-page.module';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MainPageComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpAxiosPageModule,
    HttpFetchPageModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
