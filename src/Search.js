import "./weather.css";
import { useState } from "react";
import Day from "./Day";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("Kyiv");
  let [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      temperatureFeel: response.data.main.feels_like,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    if (city.length > 0) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fb7bbca6bdeb1e04cdb41a440892090&units=metric`;
      axios.get(url).then(showWeather);
    }
  }
  function searchLocal(pos) {
    let crd = pos.coords;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=73a00877081bd43422bdee0f3022beb5&units=metric`;
    axios.get(url).then(showWeather);
  }
  if (weather.ready) {
    function updateCity(event) {
      setCity(event.target.value);
    }
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
    function handleSubmitNew(event) {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchLocal);
    }
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Row>
              <Col xs={8}>
                <Form.Control
                  type="text"
                  autocomplete="off"
                  placeholder="Enter a city"
                  onChange={updateCity}
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={handleSubmitNew}
                >
                  Local
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3">
            <Row>
              <Col className="main-today">
                <h1>
                  <div className="city">{weather.name}</div>
                  <div className="date-time">
                    <Day date={weather.date} />
                  </div>
                </h1>
                <h2>
                  <span className="left-floated">
                    <WeatherIcon
                      code={weather.icon}
                      alt={weather.description}
                      size={64}
                    />
                  </span>
                  <Temperature celsius={weather.temperature} />
                </h2>
              </Col>
              <Col className="frame">
                <ul>
                  <li>
                    <Row>
                      <Col>Real feel</Col>
                      <Col>{Math.round(weather.temperatureFeel)} °C</Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>Wind</Col>
                      <Col>{weather.wind} m/s</Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>Humidity</Col>
                      <Col>{weather.humidity}%</Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>
                        <div className="description">{weather.description}</div>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <Forecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
