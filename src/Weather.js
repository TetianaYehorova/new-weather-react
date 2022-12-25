import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Search from "./Search";

import Footer from "./Footer";

export default function Weather() {
  return (
    <Container>
      <Card className="card" style={{ width: "600px" }}>
        <Card.Body>
          <Search />
        </Card.Body>
      </Card>
      <Footer />
    </Container>
  );
}
