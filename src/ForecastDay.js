import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  function day() {
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function number() {
    let number = date.getDate();
    return number;
  }
  return (
    <div className="everyday">
      <div className="forecast-day">
        {day()} <br />
        {number()}
      </div>
      <div className="icon-forecast" role="img">
        <WeatherIcon code={props.data.weather[0].icon} size={48} />
      </div>
      <strong>{Math.round(props.data.temp.max)}°</strong>
      <div>{Math.round(props.data.temp.min)}°</div>
      <p>{Math.round(props.data.wind_speed)} m/s</p>
    </div>
  );
}
