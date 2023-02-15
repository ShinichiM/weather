import React, { useState } from "react";
import { Weather } from "../util/Weather";
import {
  forecastDataListMainTypes,
  forecastDataListTypes,
} from "../util/types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface SearchFormInterface {
  weather: Weather;
  setData: (data: any) => void;
}

export const SearchForm: React.FC<SearchFormInterface> = ({
  weather,
  setData,
}): JSX.Element => {
  const [locationInput, setLocationInput] = useState<string>("");

  const locationSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(locationInput);

    const locationArr = locationInput.match(/([^,]+)/g) || ["", ""];
    const city = locationArr[0];
    const state = locationArr[1];

    weather.setCity(city);
    weather.setState(state);

    // get current weather
    weather.getCurrentWeather().then((data) => {
      weather.setCurrent({
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        minTemp: Math.round(data.main.temp_min),
        maxTemp: Math.round(data.main.temp_max),
        description: Math.round(data.weather[0].description),
        windSpeed: Math.round(data.wind.speed),
        windDirection: Math.round(data.wind.deg),
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
            temp: Math.round(holdTemp / 8),
            feels_like: Math.round(holdFeel / 8),
            temp_max: Math.round(holdTempMax / 8),
            temp_min: Math.round(holdTempMin / 8),
            pressure: Math.round(holdPressure / 8),
            wind_degree: Math.round(holdWindDeg / 8),
            wind_speed: Math.round(holdWindSpeed / 8),
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

  return (
    <>
      <Form onSubmit={(e) => locationSubmitHandler(e)}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Location Search</Form.Label>
          <Form.Control
            type=""
            placeholder="Enter a Location"
            onChange={(e) => setLocationInput(e.currentTarget.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
