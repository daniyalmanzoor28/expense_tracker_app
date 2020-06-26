import React, { createContext, useReducer } from "react";
import { GlobalContext } from "./globalState";

//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 100 },
    { id: 3, text: "Book", amount: -100 },
    { id: 4, text: "Camera", amount: 200 },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};