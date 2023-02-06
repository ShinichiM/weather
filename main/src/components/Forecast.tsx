import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

interface ForecastInterface {
  data: object;
}

export const Forecast: React.FC<ForecastInterface> = ({
  data,
}): JSX.Element => {
  return Object.keys(data).length === 0 ? (
    <div>Loading Forecast ...</div>
  ) : (
    <CardGroup>
      <Card>
        <Card.Header>Tomorrow</Card.Header>
        <Card.Body>
          <Card.Title>Forecast</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Data retrieved {new Date().getMonth() + 1}/{new Date().getDate()}/
            {new Date().getFullYear()}
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>+2 Days</Card.Header>
        <Card.Body>
          <Card.Title>Forecast</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Data retrieved {new Date().getMonth() + 1}/{new Date().getDate()}/
            {new Date().getFullYear()}
          </small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header>+3 Days</Card.Header>
        <Card.Body>
          <Card.Title>Forecast</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Data retrieved {new Date().getMonth() + 1}/{new Date().getDate()}/
            {new Date().getFullYear()}
          </small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header>+4 Days</Card.Header>
        <Card.Body>
          <Card.Title>+4 Days</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Data retrieved {new Date().getMonth() + 1}/{new Date().getDate()}/
            {new Date().getFullYear()}
          </small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header>+5 Days</Card.Header>
        <Card.Body>
          <Card.Title>+5 Days</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Data retrieved {new Date().getMonth() + 1}/{new Date().getDate()}/
            {new Date().getFullYear()}
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};
