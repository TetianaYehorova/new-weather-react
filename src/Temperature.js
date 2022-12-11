import React, { useState } from "react";

export default function Temperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="main-temp">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |
          <a href="/" onClick={showFahrenheit}>
            F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="main-temp">
          {Math.round(props.celsius * 1.8 + 32)}
        </span>
        <span className="units">
          °
          <a href="/" onClick={showCelsius}>
            C
          </a>{" "}
          |F
        </span>
      </span>
    );
  }
}
