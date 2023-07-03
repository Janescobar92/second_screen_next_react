import "./globals.css";
import { Inter } from "next/font/google";

import {
  Background,
  ServiceWorkerComponent,
  WebSocketComponent,
} from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pantalla Interactiva TPV",
  description: "Anjana TPV pantalla interactiva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body id="app-body" className={inter.className}>
        <Background />
        <ServiceWorkerComponent />
        <WebSocketComponent />
        {children}
      </body>
    </html>
  );
}
