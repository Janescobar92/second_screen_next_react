"use client";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

// Internal modules or components
import { ActionType, WSState } from "./interfaces";
import reducer from "./reducer";
import { WS_INTINIATL_STATE } from "./constants";

// Create a context for state and dispatch
export const WSServerContext = createContext<{
  state: WSState;
  dispatch: Dispatch<ActionType>;
}>({ state: WS_INTINIATL_STATE, dispatch: () => null });

// Provider component for web sockets server context
const WSProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state and dispatch with useReducer
  const [state, dispatch] = useReducer(
    reducer as React.Reducer<WSState, ActionType>,
    WS_INTINIATL_STATE
  );

  // Provide the state and dispatch to children
  return (
    <WSServerContext.Provider value={{ state, dispatch }}>
      {children}
    </WSServerContext.Provider>
  );
};

export default WSProvider;
