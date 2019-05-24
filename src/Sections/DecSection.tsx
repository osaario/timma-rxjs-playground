import { Container, Row, Col } from "react-bootstrap"
import React from "react"
import { ConstantExample } from "../Panels/ConstantExample"
import { RefreshExample } from "../Panels/RefreshExample"
import { ControlledExample } from "../Panels/ControlledExample"
import { PostFormExample } from "../Panels/PostFormExample"

export const DecSection = () => (
  <Container fluid>
    <Row className="py-3">
      <Col xs={6}>
        <ConstantExample />
      </Col>
      <Col xs={6}>
        <RefreshExample />
      </Col>
      <Col className="mt-3" xs={6}>
        <ControlledExample />
      </Col>
      <Col className="mt-3" xs={6}>
        <PostFormExample />
      </Col>
    </Row>
  </Container>
)
