// Import the createAction function from Redux Toolkit for creating action creators
import { createAction } from '@reduxjs/toolkit';

// Action creators to manage counter state

// Increment counter action (no payload)
export const increment = createAction('INCREMENT');

// Decrement counter action (no payload)
export const decrement = createAction('DECREMENT');

// Set counter value action with a numerical payload
// export const setCounterValue = createAction('SET_COUNTER_VALUE', (value) => ({ value }));

export function setCounterValue(payload) {
    return { type: 'SET_COUNTER_VALUE', payload };
  }

export function setCurrencyValue(currency) {
    return { type: 'SET_CURRENCY_VALUE', payload:{currency:currency} };
  }
export function setBudgetValue(budget, state){
  if (budget < state.spent) {
    return { type: 'ALLOCATION_ERROR', payload: {'message':'The value cannot reduce budget value lower than the spending '} };
  }
else
    return { type: 'SET_BUDGET_VALUE', payload:{budget:budget, message:''} };
}

export function setBudgetAllocation(budgetAllocation, department, state){
  const isDepartmentFound = state.departments.some(vdepartment => vdepartment === department);

    if (budgetAllocation > state.remaining) {
        return { type: 'ALLOCATION_ERROR', payload: {'message':'The value cannot exceed remaining funds ' + state.currency + state.remaining} };
      }
    else if(department === null || !isDepartmentFound){
      return { type: 'ALLOCATION_ERROR', payload: {'message':'Please select a department '} };
    }
       else {
        return { type: 'SET_BUDGET_ALLOCATION', payload: { budgetAllocation:budgetAllocation, department:department, message:'' } };
      }
}