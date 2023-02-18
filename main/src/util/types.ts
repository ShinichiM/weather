export type forecastDataListMainTypes = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
};

export type forecastDataListTypes = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
  wind_degree: number;
  description: string;
  icon: string;
};

export type weatherDataTypes = {
  apiKey: string;
  city: string;
  country: string;
  current: {
    description: string;
    feelsLike: number;
    maxTemp: number;
    minTemp: number;
    temp: number;
    windDirection: number;
    windSpeed: number;
  };
  date: Date;
  forecast: Array<forecastDataListTypes>;
  state: string;
};

export type CurrentWeatherDataTypes = {
  description: string;
  feelsLike: number;
  maxTemp: number;
  minTemp: number;
  temp: number;
  windDirection: number;
  windSpeed: number;
};

export const dataUseStateInitialValue = {
  apiKey: "",
  city: "",
  country: "",
  current: {
    description: "",
    feelsLike: 0,
    maxTemp: 0,
    minTemp: 0,
    temp: 0,
    windDirection: 0,
    windSpeed: 0,
  },
  date: new Date(),
  forecast: [],
  state: "",
};
