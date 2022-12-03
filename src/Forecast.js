import "./forecast.css";

export default function Forecast() {
  return (
    <div className="everyday">
      <div className="forecast-day">
        Mon <br />7
      </div>
      <div className="icon-forecast" role="img">
        {"⛅"}
      </div>
      <strong>10°</strong>
      <div>4°</div>
      <p>5 m/s</p>
    </div>
  );
}
