import React from "react";
import { Weather } from "../util/Weather";

interface SearchFormInterface {
  currData: {};
  setCurrData: (data: {}) => void;
  foreData: {};
  setForeData: (data: {}) => void;
}

export const SearchForm: React.FC<SearchFormInterface> = ({
  currData,
  setCurrData,
}): JSX.Element => {
  let holdLocation = "";
  const locationSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const locationArr = holdLocation.match(/([^,]+)/g) || ["", ""];
    const city = locationArr[0];
    const state = locationArr[1];
    const myWeather = new Weather(city, state);
    myWeather.getCurrentWeather().then((data) => {
      setCurrData({
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
      });
    });
    myWeather.getFiveDayForecast().then((data) => console.log(data));
    // setLocation({ city: locationArr[0], state: locationArr[1] });
    // setLocation(location);
    // navigate({
    //   pathname: window.location.pathname,
    //   search: "?" + new URLSearchParams({ location: location }).toString(),
    // });
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
