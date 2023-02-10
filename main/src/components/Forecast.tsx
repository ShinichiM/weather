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
  const dateArray = data.date ? data.date.toString().split(" ") : [];

  const populateForecastData = (hasWeatherData: boolean): JSX.Element => {
    let forecastJSX = [];
    for (let i = 0; i < 5; i++) {
      if (!hasWeatherData) {
        forecastJSX.push(
          <Card>
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
      } else {
        forecastJSX.push(
          <Card>
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
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
      }
    }
    return <CardGroup>{forecastJSX}</CardGroup>;
  };
  return { ...populateForecastData(data.forecast) };
};
