import Card from "react-bootstrap/Card";
import moment from "moment";

interface CurrentInterface {
  data: any;
}

export const Current: React.FC<CurrentInterface> = ({ data }): JSX.Element => {
  const currentWeatherData = data.current;
  console.log(data);
  return Object.keys(data).length === 0 ? (
    <Card>
      <Card.Header>{moment().format("ll")}</Card.Header>
      <Card.Body>
        <Card.Title>No Data Present</Card.Title>
        <Card.Text>Please search for a city</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Card>
      <Card.Header>{moment().format("ll")}</Card.Header>
      <Card.Body>
        <Card.Title>{moment().format("dddd")}</Card.Title>
        <Card.Text>
          <ul>
            <li>Temperature: {currentWeatherData.temp}ºF</li>
            <li>Min: {currentWeatherData.minTemp}ºF</li>
            <li>High: {currentWeatherData.maxTemp}ºF</li>
            <li>Feels Like: {currentWeatherData.feelsLike}ºF</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
