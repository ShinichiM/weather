export class Weather {
  public city: string;
  public state: string;
  public country: string;
  public temp: number;
  public minTemp: number;
  public humidity: number;
  public maxTemp: number;
  public pressure: number;
  public windSpeed: number;
  public windDirection: number;
  public feelsLike: number;
  public description: string;
  public forecast: Array<object>;
  private apiKey: string;

  constructor(
    city: string,
    state: string,
    country: string = "US",
    apiKey: string = "08de60513f8aaba79d4697d19640606f",
    temp: number = 0,
    humidity: number = 0,
    minTemp: number = 0,
    maxTemp: number = 0,
    pressure: number = 0,
    windSpeed: number = 0,
    windDirection: number = 0,
    feelsLike: number = 0,
    description: string = "",
    forecast: Array<object> = [{}]
  ) {
    this.city = city;
    this.state = state;
    this.country = country;
    this.apiKey = apiKey;
    this.temp = temp;
    this.humidity = humidity;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
    this.pressure = pressure;
    this.windSpeed = windSpeed;
    this.windDirection = windDirection;
    this.feelsLike = feelsLike;
    this.description = "";
    this.forecast = forecast;
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
  getTemp(): number {
    return this.temp;
  }
  getHumidity(): number {
    return this.humidity;
  }
  getMinTemp(): number {
    return this.minTemp;
  }
  getMaxTemp(): number {
    return this.maxTemp;
  }
  getPressure(): number {
    return this.pressure;
  }
  getForecast(): Array<object> {
    return this.forecast;
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
  setTemp(temp: number): void {
    this.temp = temp;
  }
  setHumidity(humidity: number): void {
    this.humidity = humidity;
  }
  setMinTemp(minTemp: number): void {
    this.minTemp = minTemp;
  }
  setMaxTemp(maxTemp: number): void {
    this.maxTemp = maxTemp;
  }
  setPressure(pressure: number): void {
    this.pressure = pressure;
  }
  setForecast(forecast: Array<object>): void {
    this.forecast = forecast;
  }

  async getCurrentWeather(): Promise<any> {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", this.city);
    url.searchParams.append("appid", this.apiKey);
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
  async getFiveDayForecast(): Promise<object> {
    const url = new URL("https://api.openweathermap.org/data/2.5/forecast");
    url.searchParams.append("q", this.city);
    url.searchParams.append("appid", this.apiKey);
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
