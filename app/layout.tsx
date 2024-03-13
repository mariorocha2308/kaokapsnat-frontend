import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Providers } from "./providers";
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
        </Providers>
      </body>
    </html>
  );
}
