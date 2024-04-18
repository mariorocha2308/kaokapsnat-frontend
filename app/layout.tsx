import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KAOKAPSNAT - Chat Social",
  description: "KAOKAPSNAT Online chat with your contacts in real time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Providers>
          {children}
          <ToastContainer/>
        </Providers>
      </body>
    </html>
  );
}
