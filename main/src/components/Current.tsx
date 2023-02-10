import Card from "react-bootstrap/Card";
import moment from "moment";

interface CurrentInterface {
  data: object;
}

export const Current: React.FC<CurrentInterface> = ({ data }): JSX.Element => {
  return Object.keys(data).length === 0 ? (
    <Card>
      <Card.Header>Whoops!</Card.Header>
      <Card.Body>
        <Card.Title>No Data Present</Card.Title>
        <Card.Text>
          Please search for a city!
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Card>
      <Card.Header>Current Weather</Card.Header>
      <Card.Body>
        <Card.Title>Today</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
