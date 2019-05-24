import { Constant, Async, Variable, Controlled, Operation } from "react-declarative-state"
import React, { Fragment } from "react"
import { Card, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"

export class PostFormExample extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <h2>"POST / PUT Form" pattern</h2>
          <p>
            Common pattern for <i>update</i> and <i>create</i> forms with <code className="prettyprint">Operation</code>{" "}
            and <code className="prettyprint">Variable</code>
          </p>
          <pre className="bg-light px-2 py-3 pre-scrollable">
            <code className="prettyprint">{`
<Variable initialValue={{ email: "", password: "" }}>
{(credentials, setCredentials) => (
  <Fragment>
    <Operation
      onDone={(response: { fb_token: string }) => {
        alert("Logged in with token: " + response.fb_token)
      }}
    >
      {(doOperation, progress) => (
        <Form
          onSubmit={(e: any) => {
            e.preventDefault()
            doOperation(Async.POST("https://timma.fi/api/login/consumer", credentials))
          }}
        >
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e: any) => {
                setCredentials({ ...credentials, email: e.target.value })
              }}
              value={credentials.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e: any) => {
                setCredentials({ ...credentials, password: e.target.value })
              }}
              value={credentials.password}
              type="password"
            />
          </Form.Group>
          <Button disabled={progress === Async.Progress.Progressing} type="submit">
            Login
          </Button>
          {progress === Async.Progress.Error && <div className="text-danger mt-3">Login failed</div>}
        </Form>
      )}
    </Operation>
  </Fragment>
)}
</Variable>
            `}</code>
          </pre>
          <Variable initialValue={{ email: "", password: "" }}>
            {(credentials, setCredentials) => (
              <Fragment>
                <Operation
                  onDone={(response: { fb_token: string }) => {
                    alert("Logged in with token: " + response.fb_token)
                  }}
                >
                  {(doOperation, progress) => (
                    <Form
                      onSubmit={(e: any) => {
                        e.preventDefault()
                        doOperation(Async.POST("https://timma.fi/api/login/consumer", credentials))
                      }}
                    >
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          onChange={(e: any) => {
                            setCredentials({ ...credentials, email: e.target.value })
                          }}
                          value={credentials.email}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          onChange={(e: any) => {
                            setCredentials({ ...credentials, password: e.target.value })
                          }}
                          value={credentials.password}
                          type="password"
                        />
                      </Form.Group>
                      <Button disabled={progress === Async.Progress.Progressing} type="submit">
                        Login
                      </Button>
                      {progress === Async.Progress.Error && <div className="text-danger mt-3">Login failed</div>}
                    </Form>
                  )}
                </Operation>
              </Fragment>
            )}
          </Variable>
        </Card.Body>
      </Card>
    )
  }
}
