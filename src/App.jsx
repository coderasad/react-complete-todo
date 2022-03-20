import React       from 'react';
import Todos                 from "./component/todos";
import {Col, Container, Row} from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Todos/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
