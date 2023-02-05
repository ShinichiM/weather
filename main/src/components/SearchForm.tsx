import React from "react";

interface SearchFormInterface {
  location: { city: string; state: string };
  setLocation: (location: { city: string; state: string }) => void;
}

export const SearchForm: React.FC<SearchFormInterface> = ({
  location,
  setLocation,
}): JSX.Element => {
  let holdLocation = "";
  const locationSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const locationArr = holdLocation.match(/([^,]+)/g) || ["", ""];
    setLocation({ city: locationArr[0], state: locationArr[1] });
    // setLocation(location);
    // navigate({
    //   pathname: window.location.pathname,
    //   search: "?" + new URLSearchParams({ location: location }).toString(),
    // });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    holdLocation = event.target.value;
  };

  return (
    <form onSubmit={(e) => locationSubmitHandler(e)}>
      <label htmlFor="location-search" className="text-color-secondary">
        Location
      </label>
      <input
        id="location-search"
        placeholder="Search for a Location"
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
