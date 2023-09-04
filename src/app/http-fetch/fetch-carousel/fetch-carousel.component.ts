import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { regions } from 'src/app/services/cities';
import { Region } from 'src/app/interfaces/regions-interface';
import { ClimaFetchService } from '../../services/clima-fetch.service';

interface FetchCard {
  city: string;
  // Otros campos necesarios para <app-fetch-card></app-fetch-card>
}

@Component({
  selector: 'app-fetch-carousel',
  templateUrl: './fetch-carousel.component.html',
  styleUrls: ['./fetch-carousel.component.css'],
})
export class FetchCarouselComponent {
  data: any = [];

  // constructor(private climaFetchService: ClimaFetchService) {}

  // ngOnInit(): void {
  //   this.fetchClimaCiudad();
  // }

  // fetchClimaCiudad(): void {
  //   this.climaFetchService
  //     .obtenerClimaCiudadFetch('buenos aires')
  //     .subscribe((data: any) => {
  //       this.data = data;
  //       console.log(this.data);
  //     });
  // }
}
