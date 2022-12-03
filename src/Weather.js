import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Weather() {
  return (
    <Container>
      <Card className="card" style={{ width: "600px" }}>
        <Card.Body>
          <Search />
          <Current />
          <Row>
            <Col>
              <Forecast />
            </Col>
            <Col>
              <Forecast />
            </Col>
            <Col>
              <Forecast />
            </Col>
            <Col>
              <Forecast />
            </Col>
            <Col>
              <Forecast />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Footer />
    </Container>
  );
}
