import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastData } from 'src/app/interfaces/ForecastData';
import { WheatherData } from 'src/app/interfaces/WheatherData';
import { ClimaFetchService } from 'src/app/services/clima-fetch.service';

@Component({
  selector: 'app-fetch-card',
  templateUrl: './fetch-card.component.html',
  styleUrls: ['./fetch-card.component.css'],
})
export class FetchCardComponent implements OnInit {
  @Input() datosClimaCiudad: WheatherData = {} as WheatherData;
  @Input() datosPronosticoCiudad: ForecastData = {} as ForecastData;
  @Input() loading: boolean = false;
  //wheatherInfo: WheatherData = {} as WheatherData;

  formattedDate: string = '';
  dayOfWeek: string = '';
  descripcionClima: string = '';
  urlImagenFondo: string = '';

  nuevaCiudad: string = '';

  //constructor(private climaFetchService: ClimaFetchService) {}

  ngOnInit(): void {
    const now = new Date();

    // Formato de fecha:
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    this.formattedDate = now.toLocaleDateString('es-ES');

    // Obtener día de la semana: "Lunes", "Martes", ...
    const daysOfWeek = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    const dayIndex = now.getDay();

    this.dayOfWeek = daysOfWeek[dayIndex];
  }

  ngOnChanges() {
    this.descripcionClima = this.datosClimaCiudad.weather[0].description;
    this.asignarImagenFondo(this.descripcionClima);
  }

  asignarImagenFondo(descripcion: string) {
    // Define la lógica para determinar la URL de la imagen de fondo
    if (descripcion.includes('sol') || descripcion.includes('cielo claro')) {
      this.urlImagenFondo = '../../../assets/img/sol.jpg';
    } else if (
      descripcion.includes('tormenta') ||
      descripcion.includes('tormentas')
    ) {
      this.urlImagenFondo = '../../../assets/img/tormentas.jpg';
    } else if (
      descripcion.includes('niebla') ||
      descripcion.includes('nieblas')
    ) {
      this.urlImagenFondo = '../../../assets/img/niebla.jpg';
    } else if (
      descripcion.includes('lluvia') ||
      descripcion.includes('lluvias')
    ) {
      this.urlImagenFondo = '../../../assets/img/lluvia.jpg';
    } else if (
      descripcion.includes('nubes') ||
      descripcion.includes('nublado')
    ) {
      this.urlImagenFondo = '../../../assets/img/nubes.jpg';
    } else if (
      descripcion.includes('muy nuboso') ||
      descripcion.includes('nuboso')
    ) {
      this.urlImagenFondo = '../../../assets/img/muynuboso.jpg';
    } else if (
      descripcion.includes('nieve') ||
      descripcion.includes('nevando')
    ) {
      this.urlImagenFondo = '../../../assets/img/nieve.jpg';
    } else {
      this.urlImagenFondo = '../../../assets/img/mapa.jpg'; // Valor por defecto
    }
  }
}
