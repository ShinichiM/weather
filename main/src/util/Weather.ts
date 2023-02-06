import { forecastDataListTypes } from "./types";
import { CurrentWeatherDataTypes } from "./types";

export class Weather {
  private city: string;
  private state: string;
  private country: string;
  private forecast: Array<object>;
  private current: any;
  private apiKey: string;
  private date: Date;

  constructor(
    city: string,
    state: string,
    country: string = "US",
    apiKey: string = "08de60513f8aaba79d4697d19640606f",
    current = {},
    forecast: Array<forecastDataListTypes> = [],
    date: Date = new Date()
  ) {
    this.city = city;
    this.state = state;
    this.country = country;
    this.apiKey = apiKey;
    this.current = current;
    this.forecast = forecast;
    this.date = date;
  }
  getCity(): string {
    return this.city;
  }
  getState(): string {
    return this.state;
  }
  getCountry(): string {
    return this.country;
  }
  getApiKey(): string {
    return this.apiKey;
  }
  getCurrent(): object {
    return this.current;
  }
  getForecast(): Array<object> {
    return this.forecast;
  }
  getDate(): Date {
    return this.date;
  }
  setCity(city: string): void {
    this.city = city;
  }
  setState(state: string): void {
    this.state = state;
  }
  setCountry(country: string): void {
    this.country = country;
  }
  setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
  }
  setDate(date: Date): void {
    this.date = date;
  }
  setForecast(forecast: Array<object>): void {
    this.forecast = forecast;
  }
  setCurrent(current: object): void {
    this.current = current;
  }

  async getCurrentWeather(): Promise<any> {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", this.getCity());
    url.searchParams.append("appid", this.getApiKey());
    url.searchParams.append("units", "imperial");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        switch (response.status) {
          case 300:
            return {
              code: response.status,
              message: response.statusText,
            };
          case 404:
            return {
              code: response.status,
              message: response.statusText,
            };
          case 500:
            return {
              code: response.status,
              message: response.statusText,
            };
        }
      }
      return response.json();
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  }
  async getFiveDayForecast(): Promise<any> {
    const url = new URL("https://api.openweathermap.org/data/2.5/forecast");
    url.searchParams.append("q", this.getCity());
    url.searchParams.append("appid", this.getApiKey());
    url.searchParams.append("units", "imperial");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        switch (response.status) {
          case 300:
            console.error({
              code: response.status,
              message: response.statusText,
            });
            break;
          case 404:
            console.error({
              code: response.status,
              message: response.statusText,
            });
            break;
          case 500:
            console.error({
              code: response.status,
              message: response.statusText,
            });
            break;
        }
      }
      return response.json();
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  }
}
