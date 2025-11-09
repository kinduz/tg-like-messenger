import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nInitializer } from "@app/shared/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rocket-chat",
  description: "Rocket-chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.className} bg-white min-h-screen`}
      >
        <I18nInitializer />
        {children}
      </body>
    </html>
  );
}
