import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DateLocalizationPipe } from '../pipes/date-localization-pipe.pipe';

import { HttpFetchPageComponent } from './http-fetch-page.component';
import { FetchCardComponent } from './fetch-card/fetch-card.component';
import { FetchCarouselComponent } from './fetch-carousel/fetch-carousel.component';

const routes: Routes = [
  {
    path: '',
    component: HttpFetchPageComponent,
  },
];

@NgModule({
  declarations: [
    HttpFetchPageComponent,
    FetchCardComponent,
    FetchCarouselComponent,
    DateLocalizationPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class HttpFetchPageModule {}
