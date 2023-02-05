interface ForecastInterface {
  location: { city: string; state: string };
}

export const Forecast: React.FC<ForecastInterface> = ({
  location,
}): JSX.Element => {
  return <div>Testing Forecast</div>;
};
