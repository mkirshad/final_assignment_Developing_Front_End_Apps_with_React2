// Reducer function to handle state updates for the counter
export const stateReducer = (
  state = { counter: 10, budget: 0, remaining : 0, spent : 0, currency : '£', 
            departments : ['Marketing', 'Finance', 'Finance', 'Sales', 'Human Resource', 'IT']
}, // Initial state with counter and budget
  action
) => {
  switch (action.type) {
    // Increment counter action
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }; // Increment counter

    // Decrement counter action
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }; // Decrement counter

    // Set counter value action
    case 'SET_COUNTER_VALUE':
      return { ...state, counter: action.payload }; // Update counter with payload value

    // Default case: Return the existing state for unhandled actions
    default:
      return state;
  }
};
