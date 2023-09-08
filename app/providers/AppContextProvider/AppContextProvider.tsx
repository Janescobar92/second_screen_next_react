"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

// Internal modules or components
import { ActionType, AppState } from "./interfaces";
import reducer from "./reducer";
import { Loader } from "@/app/components";
import { useConfig } from "@/app/Hooks";
import { setConfig } from "./actions";

// Initialize the state
const initialState: AppState = {
  config: { company: "", ws_room: "", ws_server_port: "", loading: true },
};

// Create a context for state and dispatch
export const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

// Provider component for Config context
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state and dispatch with useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getGlobalConfig } = useConfig();

  //get config from localStaoage.
  useEffect(() => {
    const config = getGlobalConfig();
    setConfig(config, dispatch);
  }, []);

  // Show loading state while config is being fetched
  if (state.config.loading) {
    return (
      <Loader fontSize="7rem" showText LoadingText="Cargando configuración.." />
    );
  }

  // Provide the state and dispatch to children
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
