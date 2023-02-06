interface CurrentInterface {
  data: object;
}

export const Current: React.FC<CurrentInterface> = ({ data }): JSX.Element => {
  return Object.keys(data).length === 0 ? (
    <div>Loading Current Weather ...</div>
  ) : (
    <div>We have data!</div>
  );
};
