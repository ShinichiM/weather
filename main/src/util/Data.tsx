import { Weather } from "./Weather";

export const WeatherData = (): JSX.Element => {
  const myWeather = new Weather("Columbus", "Ohio", "US");

  // const currentWeather = myWeather.getCurrentWeather();
  // const weatherForecast = myWeather.getFiveDayForecast();

  // Promise.all([currentWeather, weatherForecast]).then(
  //   ([currentWeather, weatherForecast]) => {
  //     console.log(currentWeather);
  //     console.log(weatherForecast);
  //   }
  // );
  return (
    <div>
      <ul>
        <li>Data</li>
        <li>Data</li>
      </ul>
    </div>
  );
};
