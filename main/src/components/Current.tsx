import Card from "react-bootstrap/Card";
import moment from "moment";

interface CurrentInterface {
  data: any;
}

export const Current: React.FC<CurrentInterface> = ({ data }): JSX.Element => {
  const currentWeatherData = data.current;
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
    <Card
      style={{ marginBottom: "0.75rem" }}
      className="current-weather-container-desktop"
    >
      <Card.Header>{moment().format("ll")}</Card.Header>
      <Card.Body>
        <Card.Title>No Data Present</Card.Title>
        <Card.Text>Please search for a city</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Card
      style={{
        marginBottom: "0.75rem",
        backgroundColor: "#262626",
        opacity: "75%",
        border: "0.1rem solid black",
      }}
      className="current-weather-container-desktop"
    >
      <Card.Header>
        <ul
          className="p-0 m-0 d-flex justify-content-between"
          style={{ color: "white", borderBottom: "0.1rem solid black" }}
        >
          <li>{moment().format("ll")}</li>
          <li>
            {Math.abs(new Date().getHours() - 12) > 9 &&
            new Date().getHours() > 12
              ? new Date().toLocaleTimeString().split(" ")[0].substring(0, 5)
              : new Date()
                  .toLocaleTimeString()
                  .split(" ")[0]
                  .substring(0, 4)}{" "}
            {new Date().toLocaleTimeString().split(" ")[1]}
          </li>
        </ul>
      </Card.Header>

      <Card.Body style={{ color: "white" }}>
        <Card.Title className="margin-padding-none">
          <div className="d-flex flex-column">
            <span style={{ color: "red" }}>{currentWeatherData.city}</span>
            <span className="mobile-font-size fw-bold">
              {moment().format("dddd")}
            </span>
          </div>
        </Card.Title>
        <div className="current-weather">
          <div className="current-weather-main align-items-center">
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
          <ul className="current-weather-details-container">
            <li className="current-weather-details-helper">
              Low:
              <span className="fw-bold rounded text-center current-weather-detail-text-spacing">
                {currentWeatherData.minTemp}ºF
              </span>
            </li>
            <li className=" current-weather-details-helper">
              High:
              <span className="fw-bold rounded text-centerm current-weather-detail-text-spacing">
                {currentWeatherData.maxTemp}ºF
              </span>
            </li>
            <li className=" current-weather-details-helper">
              Humidity:
              <span className="fw-bold rounded text-center current-weather-detail-text-spacing">
                {currentWeatherData.humidity}%
              </span>
            </li>
            <li className="current-wind">
              Wind:
              <div>
                <span className="fw-bold rounded text-center current-weather-detail-text-spacing">
                  {Math.round(currentWeatherData.windSpeed)}mph
                </span>
                <img
                  src="/direction.svg"
                  alt="direction"
                  className="arrow-size m-0 p-0"
                  style={{
                    transform: `rotate(${
                      currentWeatherData.windDirection - 180
                    }deg)`,
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};
