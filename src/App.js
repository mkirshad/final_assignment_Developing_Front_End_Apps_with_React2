import Budget from "./components/budgetAllocation/budget";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} xl={12} lg={12}>
          <Budget />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
