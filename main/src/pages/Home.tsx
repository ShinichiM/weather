import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Current } from "../components/Current";
import { Forecast } from "../components/Forecast";
import { useState } from "react";

interface HomeInterface {
  location: { city: string; state: string };
  setLocation: (location: { city: string; state: string }) => void;
}

export const Home: React.FC<HomeInterface> = ({
  location,
  setLocation,
}): JSX.Element => {
  const [currData, setCurrData] = useState({});
  return (
    <section className="main-bg-color w-100 h-100">
      <Header />
      <SearchForm location={location} setLocation={setLocation} />
      <Current location={location} />
      <Forecast location={location} />
    </section>
  );
};
