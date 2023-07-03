"use client";

import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:8080";
const ROOM = "second_screen";

function WebSocketComponent() {
  const ws = useRef<null | Socket>(null);

  const handleConnect = (s: Socket) => {
    ws.current = s;
    ws.current?.on("connect", () => {
      console.log("Connected to WebSocket server");
      ws.current?.emit("register_client_in_room", ROOM);
    });
  };

  // const handleSendMsg = () => {
  //   if (ws.current) {
  //     ws.current.emit("restart_server", { data: "data test" });
  //   }
  // };

  const handleReadMsg = () => {
    console.log("INSIDE READ");
    if (ws.current) {
      ws.current.on("second_screen_sample_event", (data) => {
        const payload = JSON.parse(data);
        console.log(`Recived data from ${payload.transmitter}`, { payload });
      });
    }
  };

  useEffect(() => {
    const socket = io(ENDPOINT, { autoConnect: true });
    handleConnect(socket);
    handleReadMsg();

    return () => {
      ws.current?.disconnect();
    };
  }, []);

  return <div id="web-sockets-component" />;
}

export default WebSocketComponent;
