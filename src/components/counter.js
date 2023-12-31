// Import React for component creation and hooks for Redux interaction
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Counter component to display and manage counter state
function Counter() {
  // Access the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // Retrieve the current counter value from the Redux store
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      {/* Display the current counter value */}
      <p>Counter: {counter}</p>

      {/* Buttons to trigger counter updates */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'SET_COUNTER_VALUE', payload: 100 })}>Set Value to 100</button>
    </div>
  );
}

// Export the Counter component for usage in other parts of the application
export default Counter;
