"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

import { ConfigContext } from "@/app/providers/ConfigProvider/ConfigProvider";

/**
 * WebSocketComponent is a React component that connects to a WebSocket server.
 * It uses the useSWR hook to fetch the configuration for the WebSocket server,
 * and then connects to the server. If the configuration changes, it will
 * disconnect from the current server and connect to the new one.
 * @returns {JSX.Element} - The rendered component.
 */
function WebSocketComponent(): JSX.Element {
  const { state: config } = useContext(ConfigContext);

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
        setAttempts(0); // Reset the attempts count on successful connection.
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
      });
    }
  };

  // const handleSendMsg = () => {
  //   if (ws.current) {
  //     ws.current.emit("restart_server", { data: "data test" });
  //   }
  // };

  /**
   * Listen for messages from the WebSocket server.
   */
  const handleReadMsg = () => {
    if (ws.current) {
      ws.current.on("second_screen_sample_event", (data) => {
        const payload = JSON.parse(data);
        console.log(`Received data from ${payload.transmitter}`, { payload });
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

  return (
    <div id="web-sockets-component">
      {process.env.NODE_ENV === "development" && (
        <span>{`WS Server conection attemps: ${attempts}`}</span>
      )}
    </div>
  );
}

export default WebSocketComponent;
