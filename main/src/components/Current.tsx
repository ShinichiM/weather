import { Weather } from "../util/Weather";

interface CurrentInterface {
  location: { city: string; state: string };
}

export const Current: React.FC<CurrentInterface> = ({
  location,
}): JSX.Element => {
  const city = location.city;
  const state = location.state;
  if (city && state) {
    const myWeather = new Weather(city, state);
    myWeather.getCurrentWeather().then((data) => {
      myWeather.temp = data.main.temp;
      myWeather.feelsLike = data.main.feels_like;
      myWeather.minTemp = data.main.temp_min;
      myWeather.maxTemp = data.main.temp_max;
      myWeather.description = data.weather[0].description;
      myWeather.windSpeed = data.wind.speed;
      myWeather.windDirection = data.wind.deg;
      
    });
  } else {
    console.log("test");
  }
  // const test = new Weather("Columbus", "OH");
  // const currentWeather: Promise<object> = test.getCurrentWeather();
  return <div>Loading...</div>;
};
