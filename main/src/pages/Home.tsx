import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Current } from "../components/Current";
import { Forecast } from "../components/Forecast";
import { useState } from "react";
import { Weather } from "../util/Weather";

export const Home = (): JSX.Element => {
  const [data, setData] = useState<any>({});
  const [bgImage, setBgImage] = useState<any>(
    window.innerWidth > 1079 ? "/weather-image.jpg" : ""
  );
  const weather: Weather = new Weather("", "");

  return (
    <section
      className="main-bg-color min-vh-100 mobile-overflow "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <SearchForm weather={weather} setData={setData} setBgImage={setBgImage} />
      <Current data={data} />
      <Forecast data={data} />
    </section>
  );
};
