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
        console.log(item);
        forecastJSX.push(
          <Card
            key={`forecast-${moment()
              .add(index + 1, "days")
              .format("dddd")}-${index}`}
            style={{ padding: "0", width: "100vw" }}
          >
            <Card.Header>
              <ul className="p-0 m-0 d-flex justify-content-between">
                <li>
                  {moment()
                    .add(index + 1, "days")
                    .format("ll")}
                </li>
                <li>
                  {Math.abs(new Date().getHours() - 12) > 9
                    ? new Date()
                        .toLocaleTimeString()
                        .split(" ")[0]
                        .substring(0, 4)
                    : new Date()
                        .toLocaleTimeString()
                        .split(" ")[0]
                        .substring(0, 5)}{" "}
                  {new Date().toLocaleTimeString().split(" ")[1]}
                </li>
              </ul>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <div className="d-flex flex-column">
                  <span style={{ color: "red" }}>{item.city}</span>
                  <span className="mobile-font-size fw-bold">
                    {moment()
                      .add(index + 1, "days")
                      .format("dddd")}
                  </span>
                </div>
              </Card.Title>
              {/* <div className="d-flex">
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
              </div> */}

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <span className="fs-1 fw-bold">{item.temp}ºF</span>
                  <span>{item.description}</span>
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt="weather-icon"
                  className="ms-5"
                />
              </div>
              <ul className="p-0 m-0 d-flex justify-content-around">
                <li className=" d-flex justify-content-between flex-column">
                  Low:
                  <span className="fw-bold rounded text-center">
                    {item.temp_min}ºF
                  </span>
                </li>
                <li className=" d-flex justify-content-between flex-column">
                  High:
                  <span className="fw-bold rounded text-center">
                    {item.temp_max}ºF
                  </span>
                </li>
                <li className=" d-flex justify-content-between flex-column">
                  Humidity:
                  <span className="fw-bold rounded text-center">
                    {item.humidity}%
                  </span>
                </li>
                <li className=" d-flex justify-content-between flex-column">
                  Wind:
                  <div>
                    <span className="fw-bold rounded text-center">
                      {Math.round(item.wind_speed)}mph
                    </span>{" "}
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
  const holdDataTest = [];
  const popualteForecastTest = (forecastData: any) => {
    forecastData.foreach((item: any, index: number) => {});
  };
  return { ...populateForecastData(data.forecast) };
};
