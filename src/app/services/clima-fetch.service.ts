import { Injectable } from '@angular/core';
import { environment } from './environment';
import { HttpClient } from '@angular/common/http';
import { WheatherData } from '../interfaces/WheatherData';
import { Observable, map } from 'rxjs';
import { ForecastData } from '../interfaces/ForecastData';

@Injectable({
  providedIn: 'root',
})
export class ClimaFetchService {
  private apiKey: string = environment.apiKey;
  public city = 'Buenos Aires';
  private country: string | undefined = 'AR';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=sp&appid=${this.apiKey}&units=metric`;
  private icon = '11d';

  private apiPronosticoURL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&lang=sp&&appid=${this.apiKey}&units=metric`;

  private apiPronosticoIcons = `https://openweathermap.org/img/wn/${this.icon}@2x.png`;

  constructor(private http: HttpClient) {}

  obtenerClimaCiudadFetch(): Observable<WheatherData> {
    return this.http.get<WheatherData>(this.apiUrl);
  }

  obtenerPronosticoCiudadFetch(): Observable<ForecastData> {
    return this.http.get<ForecastData>(this.apiPronosticoURL);
  }

  obtenerIconoFetch(): Observable<WheatherData> {
    return this.http.get<WheatherData>(this.apiPronosticoIcons);
  }

  actualizarCiudad(nuevaCiudad: string, nuevoPais: string): void {
    this.city = nuevaCiudad;
    this.country = nuevoPais;
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&limit=1&lang=sp&appid=${this.apiKey}&units=metric`;
    this.apiPronosticoURL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.country}&lang=sp&&appid=${this.apiKey}&units=metric`;
  }
}
