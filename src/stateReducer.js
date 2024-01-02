// Reducer function to handle state updates for the counter
export const stateReducer = (
  state = { counter: 10, budget: 2000, remaining : 0, spent : 210, currency : '£', 
            departments : ['Marketing', 'Finance', 'Sales', 'Human Resource', 'IT'],
            allocation: [{'department':'Marketing', 'allocation':50}, {'department':'Finance', 'allocation':300}, {'department':'Sales', 'allocation':70}, 
                          {'department':'Human Resource', 'allocation':40}, 
                          {'department':'IT', 'allocation':500}
                        ],
            message : ''
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

    case 'SET_BUDGET_VALUE':
        return { ...state, budget: action.payload.budget, 
          spent:state.allocation.reduce((sum, item) => sum + item.allocation, 0),
          remaining: action.payload.budget - state.allocation.reduce((sum, item) => sum + item.allocation, 0),
          message: action.payload.message
        };
    
    case 'SET_CURRENCY_VALUE':
          return { ...state, currency: action.payload.currency};
    case 'SET_BUDGET_ALLOCATION':

    // Find the index of the department to update
    const index = state.allocation.findIndex((item) => item.department === action.payload.department);

    // Create a new allocation array with the updated value
    const newAllocation = [...state.allocation];
    newAllocation[index] = { ...newAllocation[index], allocation: newAllocation[index].allocation + Number(action.payload.budgetAllocation) };

    // Update remaining budget (assuming it's calculated based on allocations)
    const newRemaining = state.budget - newAllocation.reduce((sum, item) => sum + item.allocation, 0);
    
    console.log({ ...state, 
      message: action.payload.message,
      allocation:newAllocation,
      spent:newAllocation.reduce((sum, item) => sum + item.allocation, 0),
      remaining: newRemaining
    })

    return { ...state, 
      message: action.payload.message,
      allocation:newAllocation,
      spent:newAllocation.reduce((sum, item) => sum + item.allocation, 0),
      remaining: newRemaining
    }
    // return {...state, spent:state.allocation.reduce((sum, item) => sum + item.allocation, 0), 
      // remaining: state.budget - state.spent}
    // Default case: Return the existing state for unhandled actions
    
    case 'ALLOCATION_ERROR':
      return {
        ...state,
        message: action.payload.message
      }
    default:
      return {...state, spent:state.allocation.reduce((sum, item) => sum + item.allocation, 0), remaining: state.budget - state.allocation.reduce((sum, item) => sum + item.allocation, 0)};
  }
};
