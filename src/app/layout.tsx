import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Provider from "@/app/provider";
import StyledComponentsRegistry from "@/app/styeldRegistry";
import AmplifyProvider from "@/components/AmplifyProvider.tsx";
import GlobalStyle from "@/styles/GlobalStyle";

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
        <StyledComponentsRegistry>
          <Provider>
            <AmplifyProvider />
            <GlobalStyle />
            {children}
          </Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
