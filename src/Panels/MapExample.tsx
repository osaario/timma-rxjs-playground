import React from "react"
import { Card } from "react-bootstrap"
import { Observable } from "rxjs"

export class MapExample extends React.Component<{}, { text: string }> {
  state = { text: "" }
  render() {
    return (
      <Card>
        <Card.Body>
          <h2>Timer with map</h2>
          <p>Same counter stream with map</p>
          <pre className="bg-light p-4">
            <code>{`Observable.interval(1000).map(count => "Timer has counted to: " + count)`}</code>
          </pre>
          <div>
            <b>{this.state.text}</b>
          </div>
        </Card.Body>
      </Card>
    )
  }

  componentDidMount() {
    Observable.interval(1000)
      .map(count => "Timer has counted to: " + count)
      .subscribe(text => {
        this.setState({ text })
      })
  }
}
