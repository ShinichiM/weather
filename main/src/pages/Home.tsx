import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Current } from "../components/Current";
import { Forecast } from "../components/Forecast";
import { useEffect, useState } from "react";

interface HomeInterface {
  location: { city: string; state: string };
  setLocation: (location: { city: string; state: string }) => void;
}

export const Home: React.FC<HomeInterface> = ({
  location,
  setLocation,
}): JSX.Element => {
  const [currData, setCurrData] = useState({});
  const [foreData, setForeData] = useState({});

  return (
    <section className="main-bg-color w-100 h-100">
      <Header />
      <SearchForm
        currData={currData}
        setCurrData={setCurrData}
        foreData={foreData}
        setForeData={setForeData}
      />
      {currData && <Current data={currData} />}
      {foreData && <Forecast data={foreData} />}
    </section>
  );
};
