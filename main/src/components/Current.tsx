import Card from "react-bootstrap/Card";

interface CurrentInterface {
  data: object;
}

export const Current: React.FC<CurrentInterface> = ({ data }): JSX.Element => {
  return Object.keys(data).length === 0 ? (
    <div>Loading Current Weather ...</div>
  ) : (
    <Card>
      <Card.Header>Current Weather</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
