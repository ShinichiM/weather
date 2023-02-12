import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { weatherDataTypes } from "../util/types";
import moment from "moment";

interface ForecastInterface {
  data: any;
}

export const Forecast: React.FC<ForecastInterface> = ({
  data,
}): JSX.Element => {
  const populateForecastData = (
    hasWeatherData: boolean,
    forecastData: any
  ): JSX.Element => {
    let forecastJSX = [];
    // for (let i = 0; i < 5; i++) {
    if (!forecastData) {
      for (let i = 0; i < 5; i++) {
        forecastJSX.push(
          <Card
            key={`forecast-${moment()
              .add(i + 1, "days")
              .format("dddd")}-${i}`}
          >
            <Card.Header>
              {moment()
                .add(i + 1, "days")
                .format("ll")}
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {moment()
                  .add(i + 1, "days")
                  .format("dddd")}
              </Card.Title>
              <Card.Text>No Data! Please search for a city</Card.Text>
            </Card.Body>
          </Card>
        );
      }
    } else {
      forecastData.forEach((item: any, index: number) => {
        forecastJSX.push(
          <Card
            key={`forecast-${moment()
              .add(index + 1, "days")
              .format("dddd")}-${index}`}
          >
            <Card.Header>
              {moment()
                .add(index + 1, "days")
                .format("ll")}
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {moment()
                  .add(index + 1, "days")
                  .format("dddd")}
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>Temperature: {item.temp}ºF</li>
                  <li>Min: {item.temp_min}ºF</li>
                  <li>High: {item.temp_max}ºF</li>
                  <li>Feels Like: {item.feels_like}ºF</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Data retrieved {new Date().getMonth() + 1}/
                {new Date().getDate()}/{new Date().getFullYear()}
              </small>
            </Card.Footer>
          </Card>
        );
      });
    }
    // }
    return <CardGroup>{forecastJSX}</CardGroup>;
  };
  return { ...populateForecastData(data.forecast, data.forecast) };
};
