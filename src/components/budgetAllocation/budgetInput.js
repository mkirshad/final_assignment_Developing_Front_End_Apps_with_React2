// Import React for component creation and hooks for Redux interaction
import React from "react";
import { v4 as uuidv4 } from 'uuid';

// Counter component to display and manage counter state
function BudgetInput({type, text, value, color, handleChange, listArr=[]}) {

  const options = [...listArr.map((option) => (
    <option key={option.value} value={option.value} selected={option.value===value?'selected':null}>
      {option.title}
    </option>))
  ]
  
  return (
    <div key={uuidv4()} className="parent-div" style={{
      padding: (type==='input')?'20px 0px': (type==='list')? '20px 0px' :'23px 0px', /* Set vertical and horizontal padding */
      backgroundColor: color, 
    }}>
    <span key={uuidv4()}>{text}</span>
    {type==='input'?
    <input key={uuidv4()} className="child-input" type="number" value={value} onChange={(event)=>{handleChange(event.target.value)}} /> 
    : 
    type === 'list' ? <><select style={{backgroundColor: color, border: '0px solid transparent'}} key={uuidv4()} className="child-select" onChange={(event)=>{handleChange(event.target.value)}}>
    {options}
                </select> <span key={uuidv4()}>{")"}</span></> :
    <span>{value}</span>
    }
  </div>
    );
}

// Export the Counter component for usage in other parts of the application
export default BudgetInput;