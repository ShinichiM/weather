import Card from "react-bootstrap/Card";
import moment from "moment";

interface CurrentInterface {
  data: any;
}

export const Current: React.FC<CurrentInterface> = ({ data }): JSX.Element => {
  const currentWeatherData = data.current;
  console.log(currentWeatherData);

  const colorByTemperature = (temp: number): { backgroundColor: string } => {
    let style = { backgroundColor: "" };
    if (temp < 32) {
      style.backgroundColor = "#cfe2f3";
    } else if (temp > 32 && temp < 50) {
      style.backgroundColor = "#6fa8dc";
    } else if (temp > 50 && temp < 70) {
      style.backgroundColor = "#f6b26b";
    } else {
      style.backgroundColor = "#e06666";
    }
    return style;
  };
  return Object.keys(data).length === 0 ? (
    <Card style={{ marginBottom: "0.75rem" }}>
      <Card.Header>{moment().format("ll")}</Card.Header>
      <Card.Body>
        <Card.Title>No Data Present</Card.Title>
        <Card.Text>Please search for a city</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Card style={{ marginBottom: "0.75rem" }}>
      <Card.Header>
        <ul className="p-0 m-0 d-flex justify-content-between">
          <li>{moment().format("ll")}</li>
          <li>
            {new Date().toLocaleTimeString().split(" ")[0].substring(0, 5)}{" "}
            {new Date().toLocaleTimeString().split(" ")[1]}
          </li>
        </ul>
      </Card.Header>
      <Card.Body>
        <Card.Title className="margin-padding-none">
          <span className="mobile-font-size fw-bold">
            {moment().format("dddd")}
          </span>
        </Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <span className="fs-1 fw-bold">{currentWeatherData.temp}ºF</span>
            <span>{currentWeatherData.description}</span>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeatherData.icon}@2x.png`}
            alt="weather-icon"
            className="ms-5"
          />
        </div>
        <ul className="p-0 m-0 d-flex justify-content-around">
          <li className=" d-flex justify-content-between flex-column">
            Low:
            <span className="fw-bold rounded text-center">
              {currentWeatherData.minTemp}ºF
            </span>
          </li>
          <li className=" d-flex justify-content-between flex-column">
            High:
            <span className="fw-bold rounded text-center">
              {currentWeatherData.maxTemp}ºF
            </span>
          </li>
          <li className=" d-flex justify-content-between flex-column">
            Humidity:
            <span className="fw-bold rounded text-center">
              {currentWeatherData.humidity}%
            </span>
          </li>
          <li className=" d-flex justify-content-between flex-column">
            Wind:
            <div>
              <span className="fw-bold rounded text-center">
                {Math.round(currentWeatherData.windSpeed * 2.23694)}mph
              </span>{" "}
              <img
                src="/direction.svg"
                alt="direction"
                className="arrow-size m-0 p-0"
                style={{transform: `rotate(${currentWeatherData.windDirection - 180}deg)`}}
              />
            </div>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};
