import { Container, Row, Col } from "react-bootstrap"
import { TimerExample } from "../Panels/TimerExample"
import { MapExample } from "../Panels/MapExample"
import { FilterExample } from "../Panels/FilterExample"
import { GetExample } from "../Panels/GetExample"
import React from "react"
import { ConstantExample } from "../Panels/ConstantExample"
import { RefreshExample } from "../Panels/RefreshExample"

export const DecSection = () => (
  <Container fluid>
    <Row className="py-3">
      <Col xs={6}>
        <ConstantExample />
      </Col>
      <Col xs={6}>
        <RefreshExample />
      </Col>
    </Row>
  </Container>
)
