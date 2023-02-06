import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Current } from "../components/Current";
import { Forecast } from "../components/Forecast";
import { useState } from "react";
import { Weather } from "../util/Weather";

export const Home = (): JSX.Element => {
  const [data, setData] = useState<object>({});
  const weather: Weather = new Weather("", "");
  return (
    <section className="main-bg-color min-vw-100 min-vh-100">
      <Header />
      <SearchForm weather={weather} setData={setData} />
      <Current data={data} />
      <Forecast data={data} />
    </section>
  );
};
