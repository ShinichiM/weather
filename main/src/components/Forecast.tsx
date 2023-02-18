import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import moment from "moment";

interface ForecastInterface {
  data: any;
}

export const Forecast: React.FC<ForecastInterface> = ({
  data,
}): JSX.Element => {
  console.log(data);
  const colorByTemperature = (temp: number): { backgroundColor: string } => {
    let style = { backgroundColor: "" };
    if (temp < 32) {
      style.backgroundColor = "#1ca9c9";
    } else if (temp > 32 && temp < 50) {
      style.backgroundColor = "#6fa8dc";
    } else if (temp > 50 && temp < 70) {
      style.backgroundColor = "#f6b26b";
    } else {
      style.backgroundColor = "#e06666";
    }
    return style;
  };

  const populateForecastData = (forecastData: any): JSX.Element => {
    let forecastJSX = [];
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
              <ul className="p-0 m-0 d-flex justify-content-between">
                <li>
                  {moment()
                    .add(index + 1, "days")
                    .format("ll")}
                </li>
                <li>
                  {new Date()
                    .toLocaleTimeString()
                    .split(" ")[0]
                    .substring(0, 5)}{" "}
                  {new Date().toLocaleTimeString().split(" ")[1]}
                </li>
              </ul>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {moment()
                  .add(index + 1, "days")
                  .format("dddd")}
              </Card.Title>
              <div className="d-flex">
                <ul className="w-50">
                  <li className=" d-flex justify-content-between">
                    Temperature:
                    <span
                      style={colorByTemperature(item.feels_like)}
                      className="ms-1 px-1 fw-bold rounded"
                    >
                      {item.temp}ºF
                    </span>
                  </li>
                  <li className=" d-flex justify-content-between">
                    Min:
                    <span className="ms-1 px-1 fw-bold rounded">
                      {item.temp_min}ºF
                    </span>
                  </li>
                  <li className="d-flex justify-content-between">
                    High:
                    <span className="ms-1 px-1 fw-bold rounded">
                      {item.temp_max}ºF
                    </span>
                  </li>
                </ul>
                <img
                  src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt="weather-icon"
                  className="ms-5"
                />
              </div>
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
    return <CardGroup>{forecastJSX}</CardGroup>;
  };
  return { ...populateForecastData(data.forecast) };
};
