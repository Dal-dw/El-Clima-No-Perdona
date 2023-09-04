import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HttpAxiosPageComponent } from './http-axios-page.component';
import { AxiosCardComponent } from './axios-card/axios-card.component';
import { AxiosCarouselComponent } from './axios-carousel/axios-carousel.component';

const routes: Routes = [
  {
    path: '',
    component: HttpAxiosPageComponent,
  },
];

@NgModule({
  declarations: [HttpAxiosPageComponent, AxiosCardComponent, AxiosCarouselComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HttpAxiosPageModule {}
