import React from "react";
import { Weather } from "../util/Weather";
import {
  forecastDataListMainTypes,
  forecastDataListTypes,
} from "../util/types";

interface SearchFormInterface {
  weather: Weather;
  setData: (testData: object) => void;
}

export const SearchForm: React.FC<SearchFormInterface> = ({
  weather,
  setData,
}): JSX.Element => {
  let holdLocation = "";
  const locationSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const locationArr = holdLocation.match(/([^,]+)/g) || ["", ""];
    const city = locationArr[0];
    const state = locationArr[1];

    weather.setCity(city);
    weather.setState(state);

    // get current weather
    weather.getCurrentWeather().then((data) => {
      weather.setCurrent({
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
      });
    });
    // get five day forecast data
    weather.getFiveDayForecast().then((data) => {
      const forecastData = data.list;
      let holdData: Array<forecastDataListTypes> = [];

      //   parse through list of data, 8 data points for each day.
      let holdTemp = 0,
        holdFeel = 0,
        holdTempMin = 0,
        holdTempMax = 0,
        holdPressure = 0,
        holdWindDeg = 0,
        holdWindSpeed = 0;
      forecastData.forEach((item: forecastDataListMainTypes, index: number) => {
        holdTemp += item.main.temp;
        holdFeel += item.main.temp;
        holdTempMin += item.main.temp_min;
        holdTempMax += item.main.temp_max;
        holdPressure += item.main.pressure;
        holdWindDeg += item.wind.deg;
        holdWindSpeed += item.wind.speed;
        if ((index + 1) % 8 === 0) {
          holdData.push({
            temp: holdTemp / 8,
            feels_like: holdFeel / 8,
            temp_max: holdTempMax / 8,
            temp_min: holdTempMin / 8,
            pressure: holdPressure / 8,
            wind_degree: holdWindDeg / 8,
            wind_speed: holdWindSpeed / 8,
            humidity: 0,
            description: item.weather[2],
          });
          holdTemp = 0;
          holdFeel = 0;
          holdTempMin = 0;
          holdTempMax = 0;
          holdPressure = 0;
          holdWindDeg = 0;
          holdWindSpeed = 0;
        }
      });
      weather.setForecast(holdData);
      setData({ ...weather });
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    holdLocation = event.target.value;
  };

  return (
    <form onSubmit={(e) => locationSubmitHandler(e)}>
      <label htmlFor="location-search" className="text-color-secondary">
        Location
      </label>
      <input
        id="location-search"
        placeholder="Search for a Location"
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
