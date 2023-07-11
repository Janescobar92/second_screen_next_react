"use client";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

// Internal modules or components
import { ActionType, WSState } from "./interfaces";
import reducer from "./reducer";

// Initialize the state
const initialState: WSState = {
  incoming: null,
  outgoing: null,
};

// Create a context for state and dispatch
export const WSServerContext = createContext<{
  state: WSState;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

// Provider component for web sockets server context
const WSProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state and dispatch with useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Provide the state and dispatch to children
  return (
    <WSServerContext.Provider value={{ state, dispatch }}>
      {children}
    </WSServerContext.Provider>
  );
};

export default WSProvider;
