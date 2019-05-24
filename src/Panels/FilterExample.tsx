import React from "react"
import { Card } from "react-bootstrap"
import { Observable } from "rxjs"

export class FilterExample extends React.Component<{}, { time: number }> {
  state = { time: 0 }
  render() {
    return (
      <Card>
        <Card.Body>
          <h2>Timer with filter</h2>
          <p>Only even numbers stream</p>
          <pre className="bg-light px-2 py-3">
            <code className="prettyprint">{`Observable.interval(1000)
                    .filter(v => !(v % 2))`}</code>
          </pre>
          <div>
            <b>{this.state.time}</b>
          </div>
        </Card.Body>
      </Card>
    )
  }

  componentDidMount() {
    Observable.interval(1000)
      .filter(v => !(v % 2))
      .subscribe(value => {
        this.setState({ time: value })
      })
  }
}
