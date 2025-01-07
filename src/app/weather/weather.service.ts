import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'accaada3db46493ab9a180550242812'; // Replace with your OpenWeatherMap API key
  private baseUrl = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  // http://api.weatherapi.com/v1/current.json?key=accaada3db46493ab9a180550242812&q=Patna&aqi=no

  getWeatherByCity(city :string): Observable<any> {
    // &exclude=${'hourly,daily'}
    const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}&aqi=no`;
    return this.http.get(url);
  }

  getSearchCity(city: string): Observable<any> {
    // &exclude=${'hourly,daily'}
    const url = `${this.baseUrl}/search.json?key=${this.apiKey}&q=${city}`;
    return this.http.get(url);
  }
}
