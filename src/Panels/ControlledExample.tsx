import { Constant, Async, Variable, Controlled } from "react-declarative-state"
import React, { Fragment } from "react"
import { Card } from "react-bootstrap"
import { Form } from "react-bootstrap"

interface Salon {
  name: string
}

export class ControlledExample extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Variable initialValue={"101"}>
            {(serviceId, setServiceId) => (
              <Fragment>
                <h2>"Search pattern"</h2>
                <p>
                  Trigger new load with parameter change with <code>Controlled</code>. Use <code>controlKey</code> to
                  trigger new load when serviceId changes
                </p>
                <Form.Group>
                  <Form.Label>Service id</Form.Label>
                  <Form.Control
                    onChange={(e: any) => {
                      setServiceId(e.target.value)
                    }}
                    as="select"
                    value={serviceId}
                  >
                    <option value={"101"}>101</option>
                    <option value={"102"}>102</option>
                    <option value={"103"}>103</option>
                  </Form.Control>
                </Form.Group>
                <pre className="bg-light p-4 pre-scrollable">
                  <code>{`
            `}</code>
                </pre>
                <Controlled
                  controlKey={serviceId}
                  debounceTime={300}
                  placeholder={() => (
                    <div>
                      <b>No values yet</b>
                    </div>
                  )}
                  value={Async.GET<Salon[]>(
                    `https://timma.fi/api/serviceslots/timmaproviders/v2?serviceId=${serviceId}&n=60.172452088029026&w=24.928229601531257&s=60.16056037498048&e=24.945266993193854&days=0,1,2,3&times=0,1,2,3,4&country=FI&lang=en`
                  )}
                >
                  {(salons, progress) => (
                    <div style={{ opacity: progress === Async.Progress.Progressing ? 0.5 : 1 }}>
                      <b>
                        {salons.slice(0, 5).map(({ name }, idx) => (
                          <span>
                            {name}
                            {idx === 4 ? "..." : ", "}
                          </span>
                        ))}
                      </b>
                    </div>
                  )}
                </Controlled>
              </Fragment>
            )}
          </Variable>
        </Card.Body>
      </Card>
    )
  }
}
