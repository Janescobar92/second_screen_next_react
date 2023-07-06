import "./globals.css";
import { Inter } from "next/font/google";

import {
  Background,
  NavBar,
  ServiceWorkerComponent,
  WebSocketComponent,
} from "./components";
import { getGlobalConfig } from "./utils/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pantalla Interactiva TPV",
  description: "Anjana TPV pantalla interactiva",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = await getGlobalConfig();

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body id="app-body" className={inter.className}>
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        <Background />
        <ServiceWorkerComponent />
        <WebSocketComponent config={config} />
        {children}
      </body>
    </html>
  );
}
