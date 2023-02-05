interface ForecastInterface {
  data: {};
}

export const Forecast: React.FC<ForecastInterface> = ({
  data,
}): JSX.Element => {
  console.log(data);
  return <div>Testing Forecast</div>;
};
