import "./weather.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Current() {
  return (
    <Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Row>
            <Col className="main-today">
              <h1>
                <div className="city">Kyiv</div>
                <div className="date-time">Sun 6 November, 19:20</div>
              </h1>
              <h2>
                <span className="icon-sun" role="img">
                  {"⛅"}
                </span>
                <span className="main-temp">10°</span>
                <span className="units">C|F</span>
              </h2>
            </Col>
            <Col className="frame">
              <ul>
                <li>
                  <Row>
                    <Col>Real feel</Col>
                    <Col>10°</Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col>Wind</Col>
                    <Col>5 m/s</Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col>Humidity</Col>
                    <Col>93%</Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col>
                      <div className="description">Clouds</div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </Col>
          </Row>
        </Form.Group>
      </fieldset>
    </Form>
  );
}
