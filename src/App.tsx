import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Navbar, Nav, Row, Col, Container, Tabs, Tab } from "react-bootstrap"
import { MapExample } from "./Panels/MapExample"
import { TimerExample } from "./Panels/TimerExample"
import { GetExample } from "./Panels/GetExample"
import { FilterExample } from "./Panels/FilterExample"
import { RxJSSection } from "./Sections/RxJSSection"
import { Variable } from "react-declarative-state"
import { DecSection } from "./Sections/DecSection"

function App() {
  return (
    <div>
      <Navbar bg="light" className="shadow-sm">
        <Navbar.Brand>RxJS (~5😱) / react-declarative-state playground</Navbar.Brand>
      </Navbar>
      <Variable initialValue={"rxjs" as "rxjs" | "dec"}>
        {(activeKey, setActiveKey) => (
          <Tabs className="px-3 pt-2" id="controlled-tab-example" activeKey={activeKey} onSelect={setActiveKey}>
            <Tab eventKey="rxjs" title="RxJS">
              <RxJSSection />
            </Tab>
            <Tab eventKey="dec" title="react-declarative-state">
              <DecSection />
            </Tab>
          </Tabs>
        )}
      </Variable>
    </div>
  )
}

export default App
