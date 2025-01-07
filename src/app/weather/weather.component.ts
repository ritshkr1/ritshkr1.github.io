import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  city: string = '';
  suggestions: string[] = [];
  weatherData: any = null;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(){
    
  }

  // Fetch city suggestions as user types
  onCityInput(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    if (query.length > 2) { // Fetch suggestions for 3+ characters
      
        this.weatherService.getSearchCity(query).subscribe(
          (response) => {
            this.suggestions = response.map((city:any) => city.name);
          },
          (error) => {
            this.error = 'Error fetching city suggestions.';
            this.suggestions = [];
          }
        );
    } else {
      this.suggestions = [];
    }
  }

  // Select a city from the suggestions
  selectCity(city: string) {
    this.city = city;
    this.suggestions = []; // Clear suggestions after selection
    this.getWeather()
  }

  getWeather() {
    if (!this.city.trim()) {
      this.error = 'Please enter a city name.';
      return;
    }

    this.weatherService.getWeatherByCity(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = '';
      },
      error: () => {
        this.weatherData = null;
        this.error = 'City not found or API error.';
      },
    });
  }
}
