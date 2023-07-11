"use client";
import "./globals.css";
import { Inter } from "next/font/google";

import {
  Background,
  NavBar,
  ServiceWorkerComponent,
  WebSocketComponent,
} from "./components";
import { AppThemeProvider, ConfigProvider, WSProvider } from "./providers";

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
        <ConfigProvider>
          <AppThemeProvider>
            <header>
              <nav>
                <NavBar />
              </nav>
            </header>
            <Background />
            <ServiceWorkerComponent />
            <WSProvider>
              <WebSocketComponent />
              {children}
            </WSProvider>
          </AppThemeProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
