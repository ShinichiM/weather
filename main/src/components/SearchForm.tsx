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
      console.log(data);
      weather.setCurrent({
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        minTemp: Math.round(data.main.temp_min),
        maxTemp: Math.round(data.main.temp_max),
        description: data.weather[0].description,
        windSpeed: Math.round(data.wind.speed),
        windDirection: Math.round(data.wind.deg),
        icon: data.weather[0].icon,
        city: data.name,
        humidity: data.main.humidity,
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
        holdWindSpeed = 0,
        holdHumidity = 0;
      forecastData.forEach((item: forecastDataListMainTypes, index: number) => {
        console.log(item);
        holdHumidity += item.main.humidity;
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
            humidity: Math.round(holdHumidity / 8),
            description: item.weather[0].description,
            icon: item.weather[0].icon,
            city: city,
          });
          holdTemp = 0;
          holdFeel = 0;
          holdTempMin = 0;
          holdTempMax = 0;
          holdPressure = 0;
          holdWindDeg = 0;
          holdWindSpeed = 0;
          holdHumidity = 0;
        }
      });
      weather.setForecast(holdData);
      setData({ ...weather });
    });
  };

  return (
    <Form
      onSubmit={(e) => locationSubmitHandler(e)}
      className="mb-3 desktop-container"
    >
      <Form.Group
        className="d-flex justify-content-between align-items-center"
        controlId=""
      >
        <Form.Label style={{ color: "white" }} className="m-0">
          Search for a City, State:{" "}
        </Form.Label>
        <div className="d-flex">
          <Form.Control
            type=""
            placeholder="Enter a Location"
            style={{ border: "none" }}
            className="p-0"
            onChange={(e) => setLocationInput(e.currentTarget.value)}
          />

          <Button variant="primary" type="submit" className="p-1">
            <img src="/search-icon.svg" alt="search-icon" />
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};
