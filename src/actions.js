// Import the createAction function from Redux Toolkit for creating action creators
import { createAction } from '@reduxjs/toolkit';

// Action creators to manage counter state

// Increment counter action (no payload)
export const increment = createAction('INCREMENT');

// Decrement counter action (no payload)
export const decrement = createAction('DECREMENT');

// Set counter value action with a numerical payload
export const setCounterValue = createAction('SET_COUNTER_VALUE', (value) => ({ value }));