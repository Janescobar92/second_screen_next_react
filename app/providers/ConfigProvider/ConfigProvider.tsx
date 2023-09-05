"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

// Internal modules or components
import { ActionType, ConfigState } from "./interfaces";
import reducer from "./reducer";
import { Loader } from "@/app/components";
import { setConfig } from "./actions";
import useConfig from "@/app/Hooks/useConfig";

// Initialize the state
const initialState: ConfigState = {
  company: "",
  ws_room: "",
  ws_server_port: "",
  loading: true,
};

// Create a context for state and dispatch
export const ConfigContext = createContext<{
  state: ConfigState;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

// Provider component for Config context
const ConfigProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state and dispatch with useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getGlobalConfig } = useConfig();

  //get config from localStaoage.
  useEffect(() => {
    const config = getGlobalConfig();
    setConfig(config, dispatch);
  }, []);

  // Show loading state while config is being fetched
  if (state.loading) {
    return (
      <Loader fontSize="7rem" showText LoadingText="Cargando configuración.." />
    );
  }

  // Provide the state and dispatch to children
  return (
    <ConfigContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
