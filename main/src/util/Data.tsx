import { Weather } from "./Weather";

export const WeatherData = (): JSX.Element => {
  const weather = new Weather("Columbus", "Ohio", "US");
  weather.getCurrentWeather();
  weather.getFiveDayForecast();

  return (
    <div>
      <ul>
        <li>Data</li>
        <li>Data</li>
      </ul>
    </div>
  );
};
