import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Provider from "./provider";
import StyledComponentsRegistry from "./styeldRegistry";
import AmplifyProvider from "@/components/AmplifyProvider.tsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bix-tecnologia",
  description: "Gestão Financeira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AmplifyProvider />
        <Provider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
