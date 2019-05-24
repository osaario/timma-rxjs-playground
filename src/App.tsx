import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap"
import { MapExample } from "./Panels/MapExample"
import { TimerExample } from "./Panels/TimerExample"
import { GetExample } from "./Panels/GetExample"

function App() {
  return (
    <div>
      <Navbar bg="light" className="shadow-sm">
        <Navbar.Brand>RxJS (~5😱) / react-declarative-state playground</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row className="py-3">
          <Col xs={4}>
            <TimerExample />
          </Col>
          <Col xs={4}>
            <MapExample />
          </Col>
          <Col xs={4}>
            <GetExample />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
