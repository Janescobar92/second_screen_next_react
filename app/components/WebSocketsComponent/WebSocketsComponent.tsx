"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

// Context and constants imports
import { AppContext, WSServerContext } from "@/app/providers";
import { ROUTES } from "@/app/constants";
import { useNavigation } from "@/app/Hooks";
import {
  getTPVStatus,
  resetState,
  setIncomingMsg,
} from "@/app/providers/WSProvider/actions";
import { setTPVLoader } from "@/app/providers/AppContextProvider/actions";
import {
  WSPayload,
  WSPayloadTypes,
} from "@/app/providers/WSProvider/interfaces";

import { NEW_SALE_MSG, READ_FROM_TPV_MSG } from "./constants";

/**
 * WebSocketComponent is a React component that connects to a WebSocket server.
 * It uses the useContext and AppContext hook to get the configuration for the WebSocket server,
 * and then connects to the server. If the configuration changes, it will
 * disconnect from the current server and connect to the new one.
 * @returns {JSX.Element} - The rendered component.
 */
function WebSocketComponent(): JSX.Element {
  const { state: appState, dispatch: appDispatch } = useContext(AppContext);
  const { state, dispatch } = useContext(WSServerContext);
  const { router } = useNavigation();
  const [conected, setConected] = useState<boolean>(false);

  const { config } = appState;

  // Create a ref to hold the WebSocket connection.
  const ws = useRef<null | Socket>(null);

  // State to hold the number of connection attempts.
  const [attempts, setAttempts] = useState(0);

  /**
   * Create a new socket connection.
   * @returns {Socket | null} - The new socket connection, or null if the server port is not defined.
   */
  const createSocket = (): Socket | null => {
    if (config?.ws_server_port) {
      return io(config.ws_server_port, {
        autoConnect: true,
        reconnection: false,
      });
    } else {
      console.error("Server port is not defined");
      return null;
    }
  };

  /**
   * Connect to the WebSocket server.
   * @param {Socket} s - The socket to connect.
   */
  const handleConnect = (s: Socket | null) => {
    if (s) {
      ws.current = s;

      ws.current?.on("connect", () => {
        console.log("Connected to WS Server.");
        ws.current?.emit("register_client_in_room", config?.ws_room);
        setConected(true);
        setAttempts(0); // Reset the attempts count on successful connection.
        getTPVStatus(dispatch);
      });

      ws.current?.on("connect_error", () => {
        console.log("WS Connection failed.");
        setAttempts((prevAttempts) => {
          if (prevAttempts < 3) {
            setTimeout(() => handleConnect(createSocket()), 2000); // Retry after 2 seconds
            return prevAttempts + 1;
          } else {
            console.log(
              "Waiting 1 minute before reattempting connection to WS server."
            );
            setTimeout(() => {
              setAttempts(0);
              handleConnect(createSocket());
            }, 60000);
            return prevAttempts;
          }
        });
        setConected(false);
      });
    }
  };

  /**
   * Send messages to WebSocket server.
   */
  const handleSendMsg = (details: WSPayload | null) => {
    if (!details) return;
    if (ws.current) {
      ws.current.emit("to_room_event", JSON.stringify(details));
    }
  };

  /**
   * Handles new sale payload case.
   */
  const handleNewSale = () => {
    router.push(ROUTES.home);
    resetState(dispatch);
  };

  /**
   * Handles inconig comparative type payload.
   * @param {WSPayload} payload - The payload to handle.


  /**
  * Handles inconig Sale and Comparative type payload.
   * @param {WSPayload} payload - The payload to handle.

   */
  const handleSaleProccess = (payload: WSPayload) => {
    setIncomingMsg(payload, dispatch);
  };

  /**
   * Handles inconig loading type payload.
   * @param {WSPayload} payload - The payload to handle.

   */
  const handleLoading = (payload: WSPayload) => {
    setTPVLoader(payload.data as boolean, appDispatch);
  };

  /**
   * Handles inconig text type payload.
   * @param {WSPayload} payload - The payload to handle.
   */
  const handleText = (payload: WSPayload) => {
    switch (payload.data) {
      case NEW_SALE_MSG:
        handleNewSale();
        break;
      default:
        setIncomingMsg(payload, dispatch);
        break;
    }
  };

  /**
   * Handles inconig ws msg payload.
   * @param {WSPayload} payload - The payload to handle.
   */
  const handleIncoimingMsg = (payload: WSPayload) => {
    const isSaleProcess =
      payload.type === WSPayloadTypes.comparative ||
      payload.type === WSPayloadTypes.sale;

    if (isSaleProcess) handleSaleProccess(payload);
    if (payload.type === WSPayloadTypes.text) handleText(payload);
    if (payload.type === WSPayloadTypes.loading) handleLoading(payload);
  };

  /**
   * Listen for messages from the WebSocket server.
   */
  const handleReadMsg = () => {
    if (ws.current) {
      ws.current.on(READ_FROM_TPV_MSG, (data) => {
        const payload: WSPayload = JSON.parse(data);
        handleIncoimingMsg(payload);
      });
    }
  };

  // When the component mounts or the config changes, connect to the WebSocket server.
  useEffect(() => {
    if (config) {
      // If the socket is already connected, disconnect it before creating a new one.
      if (ws.current) {
        ws.current.disconnect();
      }

      handleConnect(createSocket());
      handleReadMsg();
    }

    // When the component unmounts, disconnect the socket.
    return () => {
      ws.current?.disconnect();
    };
  }, [config]); // Add config as dependencies of useEffect.

  useEffect(() => {
    if (conected) handleSendMsg(state?.outgoing);
  }, [state?.outgoing, conected]);

  return (
    <div id="web-sockets-component">
      {process.env.NODE_ENV === "development" && (
        <span>{`WS Server conection attemps: ${attempts}`}</span>
      )}
    </div>
  );
}

export default WebSocketComponent;
