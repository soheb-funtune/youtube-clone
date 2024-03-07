import React, { createContext, useContext, useReducer } from "react";

// Define your initial state
const initialState = {
  count: 0,
  category: null,
};

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create your context
const CounterContext = createContext();

// Create your provider component
const CounterProvider = ({ children }) => {
  // Use useReducer to manage state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
export const CounterState = () => {
  return useContext(CounterContext);
};
export { CounterContext, CounterProvider };
