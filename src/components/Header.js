import React from "react";
import { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";

function Header() {
  const { city, setCity } = useContext(WeatherContext);

  const onInputChange = (event) => {
    event.preventDefault();
    let cityInput = document.getElementById("cityInput");
    setCity(cityInput.value.toUpperCase());
    cityInput.value = "";
  };

  return (
    <div id="header-area">
      <div id="input-area">
        <form onSubmit={onInputChange}>
          <input
            id="cityInput"
            type="search"
            placeholder="Enter city name"
            defaultValue=""
          />
        </form>
      </div>
      <div id="city-name">{city.toUpperCase()}</div>
    </div>
  );
}

export default Header;
