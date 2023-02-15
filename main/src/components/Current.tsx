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
      style.backgroundColor = "#1ca9c9";
    } else if (temp > 32 && temp < 50) {
      style.backgroundColor = "#ffd966";
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
      <Card.Header>{moment().format("ll")}</Card.Header>
      <Card.Body>
        <Card.Title>{moment().format("dddd")}</Card.Title>
        <ul>
          <li className="w-50 d-flex justify-content-between">
            Feels Like:
            <span
              style={colorByTemperature(currentWeatherData.temp)}
              className="ms-1 px-1 fw-bold rounded"
            >
              {currentWeatherData.feelsLike}ºF
            </span>
          </li>
          <li className="w-50 d-flex justify-content-between">
            Temperature:
            <span className="ms-1 px-1 fw-bold rounded text-end">
              {currentWeatherData.temp}ºF
            </span>
          </li>
          <li className="w-50 d-flex justify-content-between">
            Min:
            <span className="ms-1 px-1 fw-bold rounded">
              {currentWeatherData.minTemp}ºF
            </span>
          </li>
          <li className="w-50 d-flex justify-content-between">
            High:
            <span className="ms-1 px-1 fw-bold rounded">
              {currentWeatherData.maxTemp}ºF
            </span>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};
