import { Container, Row, Col } from "react-bootstrap"
import { TimerExample } from "../Panels/TimerExample"
import { MapExample } from "../Panels/MapExample"
import { FilterExample } from "../Panels/FilterExample"
import { GetExample } from "../Panels/GetExample"
import React from "react"

export const RxJSSection = () => (
  <Container fluid>
    <Row className="py-3">
      <Col xs={4}>
        <TimerExample />
      </Col>
      <Col xs={4}>
        <MapExample />
      </Col>
      <Col xs={4}>
        <FilterExample />
      </Col>
      <Col className="my-3" xs={4}>
        <GetExample />
      </Col>
    </Row>
  </Container>
)
