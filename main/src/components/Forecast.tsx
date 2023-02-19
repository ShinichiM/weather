import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import moment from "moment";

interface ForecastInterface {
  data: any;
}

export const Forecast: React.FC<ForecastInterface> = ({
  data,
}): JSX.Element => {
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
            style={{
              padding: "0",
              width: "100vw",
              backgroundColor: "#262626",
              opacity: "75%",
              border: "0.1rem solid black",
            }}
          >
            <Card.Header
              style={{ color: "white", borderBottom: "0.1rem solid black" }}
            >
              <ul className="p-0 m-0 d-flex justify-content-between">
                <li>
                  {moment()
                    .add(index + 1, "days")
                    .format("ll")}
                </li>
              </ul>
            </Card.Header>
            <Card.Body style={{ color: "white" }}>
              <Card.Title>
                <div className="d-flex flex-column">
                  <span style={{ color: "red" }}>{item.city}</span>
                  <span className=" fw-bold">
                    {moment()
                      .add(index + 1, "days")
                      .format("dddd")}
                  </span>
                </div>
              </Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <span className="fs-1 fw-bold">{item.temp}ºF</span>
                  <span>{item.description}</span>
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt="weather-icon"
                  className="forecast-icon"
                />
              </div>
              <ul className="forecast-cards">
                <li className=" forecast-cards-details">
                  Low:
                  <span className="fw-bold rounded text-center forecast-cards-details-text-space">
                    {item.temp_min}ºF
                  </span>
                </li>
                <li className=" forecast-cards-details">
                  High:
                  <span className="fw-bold rounded text-center forecast-cards-details-text-space">
                    {item.temp_max}ºF
                  </span>
                </li>
                <li className=" forecast-cards-details">
                  Humidity:
                  <span className="fw-bold rounded text-center forecast-cards-details-text-space">
                    {item.humidity}%
                  </span>
                </li>
                <li className=" forecast-cards-details">
                  Wind:
                  <div>
                    <span className="fw-bold rounded text-center forecast-cards-details-text-space">
                      {Math.round(item.wind_speed)}mph
                    </span>
                    <img
                      src="/direction.svg"
                      alt="direction"
                      className="arrow-size m-0 p-0"
                      style={{
                        transform: `rotate(${item.wind_degree - 180}deg)`,
                      }}
                    />
                  </div>
                </li>
              </ul>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Retrieved {new Date().getMonth() + 1}/{new Date().getDate()}/
                {new Date().getFullYear()}
              </small>
            </Card.Footer>
          </Card>
        );
      });
    }
    return (
      <CardGroup className="forecast-weather-container-desktop">
        {forecastJSX}
      </CardGroup>
    );
  };
  const holdDataTest = [];
  const popualteForecastTest = (forecastData: any) => {
    forecastData.foreach((item: any, index: number) => {});
  };
  return { ...populateForecastData(data.forecast) };
};
