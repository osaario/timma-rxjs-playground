import React from "react"
import { Card } from "react-bootstrap"
import { Observable } from "rxjs"

export class TimerExample extends React.Component<{}, { time: number }> {
  state = { time: 0 }
  render() {
    return (
      <Card>
        <Card.Body>
          <h2>Simple timer</h2>
          <p>Just a simple stream of values</p>
          <pre className="bg-light p-4">
            <code>{`Observable.interval(1000)`}</code>
          </pre>
          <div>
            <b>{this.state.time}</b>
          </div>
        </Card.Body>
      </Card>
    )
  }

  componentDidMount() {
    Observable.interval(1000).subscribe(value => {
      this.setState({ time: value })
    })
  }
}
