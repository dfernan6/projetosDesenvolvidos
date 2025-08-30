import './globals.css';
import { ClienteProvider } from "./components/ClientContext";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <ClienteProvider>
          {children}
        </ClienteProvider>
      </body>
    </html>
  );
}