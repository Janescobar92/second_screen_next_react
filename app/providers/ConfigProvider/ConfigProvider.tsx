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
import { getConfig } from "./services";
import reducer from "./reducer";
import { Loader } from "@/app/components";
import { CONFIG_API_URL } from "@/app/constants/config";
import { setConfig } from "./actions";

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

  // Fetch config on mount and update the state
  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await getConfig(CONFIG_API_URL);
        setConfig(response, dispatch);
      } catch (error) {
        console.error(error);
      }
    };

    fetcher();
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
