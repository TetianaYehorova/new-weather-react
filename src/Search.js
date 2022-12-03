import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Search() {
  return (
    <Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Row>
            <Col xs={8}>
              <Form.Control id="disabledTextInput" placeholder="Enter a city" />
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
      </fieldset>
    </Form>
  );
}
