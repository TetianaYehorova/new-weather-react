import "./weather.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("Kyiv");
  let [loaded, setLoaded] = useState("Kyiv");
  let [temperature, setTemperature] = useState(null);
  let [temperatureFeel, setTemperatureFeel] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    setLoaded(response.data.name);
    setTemperature(response.data.main.temp);
    setTemperatureFeel(response.data.main.feels_like);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55107c22b7dbab37f6507113cac269b5&units=metric`;
      axios.get(url).then(showWeather);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
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
                <div className="city">{loaded}</div>
                <div className="date-time">Sun 6 November, 19:20</div>
              </h1>
              <h2>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={description}
                />

                <span className="main-temp">{Math.round(temperature)}°</span>
                <span className="units">C|F</span>
              </h2>
            </Col>
            <Col className="frame">
              <ul>
                <li>
                  <Row>
                    <Col>Real feel</Col>
                    <Col>{Math.round(temperatureFeel)} °C</Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col>Wind</Col>
                    <Col>{wind} m/s</Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col>Humidity</Col>
                    <Col>{humidity}%</Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col>
                      <div className="description">{description}</div>
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
}
