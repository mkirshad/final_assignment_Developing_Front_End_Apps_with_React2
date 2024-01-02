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
    <div key={uuidv4()} style={{
      padding: (type==='input')?'20px 0px': (type==='list')? '20px 0px' :'23px 0px', /* Set vertical and horizontal padding */
      backgroundColor: color, /* Apply gray background to padding area */
      borderRadius: '5px', /* Round corners with 10px radius */
    }}>
    <span key={uuidv4()}>{text}</span>
    {type==='input'?
    <input key={uuidv4()} type="number" value={value} style={{"width":"50%"}} onChange={(event)=>{handleChange(event.target.value)}} /> 
    : 
    type === 'list' ? <><select key={uuidv4()} style={{paddingBottom:'5px'}} onChange={(event)=>{handleChange(event.target.value)}}>
    {options}
                </select> <span key={uuidv4()}>{")"}</span></> :
    <span>{value}</span>
    }
  </div>
    );
}

// Export the Counter component for usage in other parts of the application
export default BudgetInput;