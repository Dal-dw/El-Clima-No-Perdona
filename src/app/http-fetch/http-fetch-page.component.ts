import { Component } from '@angular/core';
import { ClimaFetchService } from '../services/clima-fetch.service';
import { WheatherData } from '../interfaces/WheatherData';
import { catchError } from 'rxjs';
import { ForecastData } from '../interfaces/ForecastData';

@Component({
  selector: 'app-http-fetch-page',
  templateUrl: './http-fetch-page.component.html',
  styleUrls: ['./http-fetch-page.component.css'],
})
export class HttpFetchPageComponent {
  nuevaCiudad: string = ''; // Esta variable se vinculará con el input en tu componente de entrada.
  nuevoPais: string | undefined = '';
  datosClimaCiudad: WheatherData = {} as WheatherData;
  datosPronosticoCiudad: ForecastData = {} as ForecastData;
  primeraBusqueda: boolean = false;
  loading: boolean = false;

  constructor(private climaService: ClimaFetchService) {}

  actualizarCiudad() {
    if (this.nuevaCiudad.trim() !== '') {
      this.loading = true; // Establecer como cargando
      const ciudadPais = this.nuevaCiudad.split(',');
      if (ciudadPais.length >= 2) {
        this.nuevaCiudad = ciudadPais[0].trim();
        const paisSinEspacios = ciudadPais[1].trim().replace(/\s/g, '');
        this.nuevoPais = paisSinEspacios.substring(0, 2);
      } else {
        this.nuevoPais = '';
      }
      this.climaService.actualizarCiudad(this.nuevaCiudad, this.nuevoPais);
      this.climaService
        .obtenerPronosticoCiudadFetch()
        .pipe()
        .subscribe((data) => {
          this.datosPronosticoCiudad = data;
        });
      this.climaService
        .obtenerClimaCiudadFetch()
        .pipe(
          catchError((error) => {
            this.primeraBusqueda = false;
            console.error('Error al obtener datos del clima:', error);
            alert(
              'Hubo un error al obtener los datos del clima. Por favor, verifica el dato ingresado.'
            );
            return []; // Puedes devolver un valor por defecto o manejar el error según tu necesidad
          })
        )
        .subscribe((data) => {
          this.datosClimaCiudad = data;

          this.loading = false;
          this.primeraBusqueda = true;
        });
    }
  }
}
