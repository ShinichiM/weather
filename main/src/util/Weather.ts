export class Weather {
  public city: string;
  public state: string;
  public country: string;
  private apiKey: string;

  constructor(
    city: string,
    state: string,
    country: string,
    apiKey: string = "08de60513f8aaba79d4697d19640606f"
  ) {
    this.city = city;
    this.state = state;
    this.country = country;
    this.apiKey = apiKey;
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

  async getCurrentWeather(): Promise<object> {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", this.city);
    url.searchParams.append("appid", this.apiKey);
    url.searchParams.append("units", "imperial");

    try {
      const currentWeatherData = await fetch(url).then((response: Response) => {
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
      });
      console.log(currentWeatherData);
      return currentWeatherData;
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
      const fiveDayForecast = await fetch(url).then((response: Response) => {
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
      });
      console.log(fiveDayForecast);
      return fiveDayForecast;
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  }
}
