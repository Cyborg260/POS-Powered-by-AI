"use client";

import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {!hideLayout && (
            <>
              <Header />
              <Sidebar />
            </>
          )}

          <main
            style={{
              marginTop: hideLayout ? "0" : "80px",
              marginLeft: hideLayout ? "0" : "220px",
              padding: "20px",
            }}
          >
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
