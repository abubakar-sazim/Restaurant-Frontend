import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/context/chatContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DishDive",
  description: "AI based Restaurant suggestion tailored to your need.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChatProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ChatProvider>
  );
}
