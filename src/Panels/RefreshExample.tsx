import { Constant, Async, Variable } from "react-declarative-state"
import React from "react"
import { Card, Button } from "react-bootstrap"

interface Salon {
  name: string
}

const loadOperation = Async.GET<Salon[]>(
  "https://timma.fi/api/serviceslots/timmaproviders/v2?serviceId=101&n=60.172452088029026&w=24.928229601531257&s=60.16056037498048&e=24.945266993193854&days=0,1,2,3&times=0,1,2,3,4&country=FI&lang=en"
)

export class RefreshExample extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <h2>Refresh functionality with Variable</h2>
          <p>Added refresh functionality by using Variable</p>
          <pre className="bg-light p-4 pre-scrollable">
            <code>{`
<Variable
placeholder={() => (
    <div>
    <b>No values yet</b>
    </div>
)}
initialValue={loadOperation}
>
{(salons, setSalons, progress) => (
    <div style={{ opacity: progress === Async.Progress.Progressing ? 0.5 : 1 }}>
    <b>
        {salons.slice(0, 5).map(({ name }, idx) => (
        <span>
            {name}
            {idx === 4 ? "..." : ", "}
        </span>
        ))}
    </b>
    <br />
    <Button
        onClick={() => {
        setSalons(loadOperation)
        }}
    >
        Refresh
    </Button>
    </div>
)}
</Variable>
            `}</code>
          </pre>
          <Variable
            placeholder={() => (
              <div>
                <b>No values yet</b>
              </div>
            )}
            initialValue={loadOperation}
          >
            {(salons, setSalons, progress) => (
              <div style={{ opacity: progress === Async.Progress.Progressing ? 0.5 : 1 }}>
                <b>
                  {salons.slice(0, 5).map(({ name }, idx) => (
                    <span>
                      {name}
                      {idx === 4 ? "..." : ", "}
                    </span>
                  ))}
                </b>
                <br />
                <Button
                  onClick={() => {
                    setSalons(loadOperation)
                  }}
                >
                  Refresh
                </Button>
              </div>
            )}
          </Variable>
        </Card.Body>
      </Card>
    )
  }
}
