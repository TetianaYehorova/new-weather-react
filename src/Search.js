import "./weather.css";
import { useState } from "react";
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
      temperature: response.data.main.temp,
      temperatureFee: response.data.main.feels_like,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  if (weather.ready) {
    function updateCity(event) {
      setCity(event.target.value);
    }
    return (
      <div>
        <Form>
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
                <Button variant="secondary" type="submit">
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
                  <div className="date-time">Sun 6 November, 19:20</div>
                </h1>
                <h2>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                  />

                  <span className="main-temp">
                    {Math.round(weather.temperature)}°
                  </span>
                  <span className="units">C|F</span>
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
      </div>
    );
  } else {
    if (city.length > 0) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55107c22b7dbab37f6507113cac269b5&units=metric`;
      axios.get(url).then(showWeather);
    }
    return "Loading...";
  }
}
