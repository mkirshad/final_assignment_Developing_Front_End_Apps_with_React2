// Import React for component creation and hooks for Redux interaction
import React from "react";
import {Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

import BudgetAllocation from "./budgetAllocation";


// Counter component to display and manage counter state
function Counter() {
  // Access the dispatch function to send actions to the Redux store

  return (
          <Row>
            {/* Display the current counter value */}
            <Row>
              <Col xs={12} md={12} xl={6} lg={6}>
                <h1 style={{"float":"left", padding: '10px 0px', maxWith:'100%'}}>Company's Budget Allocation</h1>
              </Col>
            </Row>
            <Row>
              <BudgetAllocation />
            </Row>
          </Row>
  );
}

// Export the Counter component for usage in other parts of the application
export default Counter;
