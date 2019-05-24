import { Constant, Async } from "react-declarative-state"
import React from "react"
import { Card } from "react-bootstrap"

interface Salon {
  name: string
}

export class ConstantExample extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <h2>GET request with Constant</h2>
          <p>Same exact functionality as the get example in the first tab, now with Constant</p>
          <pre className="bg-light px-2 py-3 pre-scrollable">
            <code className="prettyprint">{`
<Constant
    placeholder={() => (
    <div>
        <b>No values yet</b>
    </div>
    )}
    value={Async.GET<Salon[]>(
    "https://timma.fi/api/serviceslots/timmaproviders/v2?serviceId=101&n=60.172452088029026&w=24.928229601531257&s=60.16056037498048&e=24.945266993193854&days=0,1,2,3&times=0,1,2,3,4&country=FI&lang=en"
    )}
>
    {salons => (
    <div>
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
</Constant>
            `}</code>
          </pre>
          <Constant
            placeholder={() => (
              <div>
                <b>No values yet</b>
              </div>
            )}
            value={Async.GET<Salon[]>(
              "https://timma.fi/api/serviceslots/timmaproviders/v2?serviceId=101&n=60.172452088029026&w=24.928229601531257&s=60.16056037498048&e=24.945266993193854&days=0,1,2,3&times=0,1,2,3,4&country=FI&lang=en"
            )}
          >
            {salons => (
              <div>
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
          </Constant>
        </Card.Body>
      </Card>
    )
  }
}
