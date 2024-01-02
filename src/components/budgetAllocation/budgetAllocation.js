// Import React for component creation and hooks for Redux interaction
import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Fab, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BudgetInput from "./budgetInput";
import {setBudgetAllocation, setBudgetValue, setCurrencyValue} from '../../actions'
import { v4 as uuidv4 } from 'uuid';
import './BudgetAllocation.css'; // Import the CSS file


// Counter component to display and manage counter state
function BudgetAllocation() {

    let vNewAllocation = Number(null);
    let vNewAllocationDepartment = 'Marketing';
    let allocationSign = 1;

  // Access the dispatch function to send actions to the Redux store
 
    const budget = useSelector((state) => state.budget);
    const remaining = useSelector((state) => state.remaining);
    const spent = useSelector((state) => state.spent);
    const currency = useSelector((state) => state.currency);
    const message = useSelector((state) => state.message);
    if(message!==''){
        alert(message);
    }

  // Retrieve the current counter value from the Redux store
  const Budget_Allocations = useSelector((state) => state.allocation);
  const DEPARTMENTS = useSelector((state) => state.departments);
  const CURRENCY = useSelector((state) => state.currency);
  const options = [
    ...DEPARTMENTS.map((department) => (
      <option key={department} value={department}>
        {department}
      </option>
    )),
  ];

  const dispatch = useDispatch()

  const handle_budget_value_change = (val) => {
    console.log(val)
    dispatch(setBudgetValue(val, {remaining:remaining, spent:spent, currency:currency}));
  };
  
  const handle_currency_value_change = (val) => {
    console.log(val)
    dispatch(setCurrencyValue(val));
  };

  const RUPEE_ARR = [{value:'$', title:'$ Dollar'}, {value:'£', title:'£ Pound'}, {value:'€', title:'€ Euro'}, {value:'₹', title:'₹ Rupee'}]

  return (
    <Row className="container-row">
            <Row key={uuidv4()}>
              <Col key={uuidv4()} xs={4} md={4} xl={2} lg={4}>
                <BudgetInput key={uuidv4()} type="input" value={budget} color={'#E2E3E5'} text={"Budget: "+currency} handleChange={handle_budget_value_change} />
              </Col>

              <Col key={uuidv4()} xs={4} md={4} xl={2} lg={4}>
                <BudgetInput key={uuidv4()} value={remaining} color={'#D1E6DD'} text={"Remaining: "+currency}/>
              </Col>

              <Col key={uuidv4()} xs={4} md={4} xl={2} lg={4}>
                <BudgetInput key={uuidv4()} value={spent} color={'#CFE2FF'} text={"Spent: "+currency}/>
              </Col>

              <Col key={uuidv4()} xs={4} md={4} xl={2} lg={4}>
                <BudgetInput key={uuidv4()} type='list' value={currency} color={'#92E299'} text={"Currency ("} listArr ={RUPEE_ARR} handleChange={handle_currency_value_change} />
              </Col>
            </Row>
    <Row key={uuidv4()} className="group-allocation-section">

        <Row key={uuidv4()} className="header-row">
            <Col key={uuidv4()}>
                <h4 key={uuidv4()} className="group-allocation-section">Allocation</h4>
            </Col>
        </Row>
        <Row key={uuidv4()}>
            <Col key={uuidv4()} xs={3} md={3} xl={2} lg={3} className="budget-input-col">
                <strong key={uuidv4()}>Department</strong>
            </Col>
            <Col key={uuidv4()} xs={3} md={3} xl={2} lg={3} className="budget-input-col">
                <strong key={uuidv4()}>Allocated Budget</strong>
            </Col>
            <Col key={uuidv4()} xs={3} md={3} xl={2} lg={3} className="budget-input-col">
                <strong key={uuidv4()}>Increase by 10</strong>
            </Col>
            <Col key={uuidv4()} xs={3} md={3} xl={2} lg={3} className="budget-input-col">
                <strong key={uuidv4()}>Decrease by 10</strong>
            </Col>
        </Row>

        {
            Budget_Allocations.map((allocation, index) => (
                <Row key={uuidv4()} >
                    {/* Assuming you want to display some properties of the allocation object */}
                    <Col key={uuidv4()} xs={3} md={3} xl={2} lg={3}  className="budget-input-col">
                        <span key={uuidv4()}>{allocation.department}</span>              
                    </Col>
                    <Col key={uuidv4()} xs={3} md={3} xl={2} lg={3}  className="budget-input-col">
                        <span key={uuidv4()}>{currency + allocation.allocation}</span>              
                    </Col>
                    <Col key={uuidv4()} xs={3} md={3} xl={2} lg={3} className="budget-input-col">
                        <Fab key={uuidv4()} color="primary" aria-label="Add" sx={{ width: 35, height: 35 }} 
                        onClick = {()=>{dispatch(setBudgetAllocation(10, allocation.department, {remaining:remaining, currency:currency, departments:DEPARTMENTS}));
                            }}
                        >
                            <AddIcon key={uuidv4()} />
                        </Fab>
                    </Col>
                    <Col key={uuidv4()} xs={3} md={3} xl={2} lg={3} className="budget-input-col">
                        <Fab color="secondary" aria-label="Remove" sx={{ width: 35, height: 35 }} 
                                 onClick = {()=>{dispatch(setBudgetAllocation(-10, allocation.department, {remaining:remaining, currency:currency, departments:DEPARTMENTS}));
                            }}
                        >
                            <RemoveIcon key={uuidv4()} />
                        </Fab>
                    </Col>

                    {/* Add more columns as needed */}
                </Row>
            ))
        }

        <Row key={uuidv4()} className="header-row2">
            <Col key={uuidv4()}>
                <h4 className="float-left">Change Allocation</h4>
            </Col>
        </Row>

        <Row key={uuidv4()} className="header-row2">
            <Col key={uuidv4()} xs={6} md={6} xl={3} lg={6} className="budget-input-col2">
                <span key={uuidv4()} className="input-label">Department</span>
                <select key={uuidv4()} className="select-input" onChange = {(event)=>{vNewAllocationDepartment=event.target.value; console.log(vNewAllocationDepartment)}}>
                    {options}
                </select>
            </Col>
            
            <Col key={uuidv4()} xs={6} md={6} xl={2} lg={6} className="budget-input-col2">
                <span key={uuidv4()} className="input-label">Allocation</span>
                <select key={uuidv4()} className="select-input" onChange={(event)=>{if(event.target.value === 'Add'){
                    allocationSign = 1
                }else{
                    allocationSign = -1
                }
                }}>
                    <option value="option1">Add</option>
                    <option value="option2">Subtract</option>
                </select>
            </Col>
            
            <Col key={uuidv4()} xs={6} md={6} xl={2} lg={6} className="budget-input-col2">
                <span key={uuidv4()}>{CURRENCY}</span>
                <input key={uuidv4()} type="number" className="with-80pc" onChange={(event)=>{event.preventDefault(); console.log(event.target.value); vNewAllocation = (event.target.value); }} />
            </Col>

            <Col key={uuidv4()} xs={6} md={6} xl={1} lg={6} className="budget-input-col2">
                <input key={uuidv4()} type='button' value='Save' className="button-input"
                    onClick = {()=>{ console.log(vNewAllocationDepartment); dispatch(setBudgetAllocation((allocationSign * vNewAllocation), vNewAllocationDepartment, {remaining:remaining, currency:currency, departments:DEPARTMENTS}));
                    }
                    }
                />
            </Col>
        </Row>
        </Row>
    </Row>
    );
}

// Export the Counter component for usage in other parts of the application
export default BudgetAllocation;