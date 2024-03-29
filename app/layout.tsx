import "./globals.css";
import { Inter } from "next/font/google";

import {
  Background,
  FinanceDialog,
  NavBar,
  ServiceWorkerComponent,
  TPVLoader,
  WebSocketComponent,
} from "./components";
import { AppThemeProvider, AppContextProvider, WSProvider } from "./providers";

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
        <AppContextProvider>
          <AppThemeProvider>
            <header>
              <nav>
                <NavBar />
              </nav>
            </header>
            <Background />
            <ServiceWorkerComponent />
            <WSProvider>
              <FinanceDialog />
              <TPVLoader />
              <WebSocketComponent />
              {children}
            </WSProvider>
          </AppThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
