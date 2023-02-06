interface ForecastInterface {
  data: object;
}

export const Forecast: React.FC<ForecastInterface> = ({
  data,
}): JSX.Element => {
  return Object.keys(data).length === 0 ? (
    <div>Loading Forecast ...</div>
  ) : (
    <div>We have data!</div>
  );
};
