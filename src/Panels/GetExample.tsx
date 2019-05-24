import React from "react"
import { Card } from "react-bootstrap"
import { Observable } from "rxjs"
import { Async } from "react-declarative-state"

interface Salon {
  name: string
}

export class GetExample extends React.Component<{}, { salons: Salon[] | null }> {
  state: { salons: Salon[] | null } = { salons: null }
  render() {
    return (
      <Card>
        <Card.Body>
          <h2>Web GET</h2>
          <p>An observable stream that only emits 1 value</p>
          <pre className="bg-light px-2 py-3">
            <code className="prettyprint">
              {`Async.GET<Salon[]>("https://timma.fi/api/serviceslots/timmaproviders/v2?serviceId=101&n=60.172452088029026&w=24.928229601531257&s=60.16056037498048&e=24.945266993193854&days=0,1,2,3&times=0,1,2,3,4&country=FI&lang=en")`}
            </code>
          </pre>
          <div>
            <b>
              {this.state.salons ? (
                this.state.salons!.slice(0, 5).map(({ name }, idx) => (
                  <span>
                    {name}
                    {idx === 4 ? "..." : ", "}
                  </span>
                ))
              ) : (
                <span>No values yet</span>
              )}
            </b>
          </div>
        </Card.Body>
      </Card>
    )
  }

  componentDidMount() {
    Async.GET<Salon[]>(
      "https://timma.fi/api/serviceslots/timmaproviders/v2?serviceId=101&n=60.172452088029026&w=24.928229601531257&s=60.16056037498048&e=24.945266993193854&days=0,1,2,3&times=0,1,2,3,4&country=FI&lang=en"
    ).subscribe(salons => this.setState({ salons }))
  }
}
