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
  return Object.keys(data).length === 0 ? (
    <div>Loading Forecast ...</div>
  ) : (
    <CardGroup>
      <Card>
        <Card.Header>{moment().add(1, "days").format("ll")}</Card.Header>
        <Card.Body>
          <Card.Title>{moment().add(1, "days").format("dddd")}</Card.Title>
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
        <Card.Header>{moment().add(2, "days").format("ll")}</Card.Header>
        <Card.Body>
          <Card.Title>{moment().add(2, "days").format("dddd")}</Card.Title>
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
        <Card.Header>{moment().add(3, "days").format("ll")}</Card.Header>
        <Card.Body>
          <Card.Title> {moment().add(3, "days").format("dddd")} </Card.Title>
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
        <Card.Header>{moment().add(4, "days").format("ll")}</Card.Header>
        <Card.Body>
          <Card.Title>{moment().add(4, "days").format("dddd")} </Card.Title>
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
        <Card.Header> {moment().add(5, "days").format("ll")} </Card.Header>
        <Card.Body>
          <Card.Title> {moment().add(5, "days").format("dddd")} </Card.Title>
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
