import { Weather } from "../util/Weather";

interface CurrentInterface {
  data: {
    // temp: number;
    // feelsLike: number;
    // minTemp: number;
    // maxTemp: number;
    // description: string;
    // windSpeed: number;
    // windDirection: number;
  };
}

export const Current: React.FC<CurrentInterface> = ({ data }): JSX.Element => {
  console.log(data);
  // const test = new Weather("Columbus", "OH");
  // const currentWeather: Promise<object> = test.getCurrentWeather();
  return <div>Loading...</div>;
};
