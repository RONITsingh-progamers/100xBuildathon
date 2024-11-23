import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./clientLayout";

const gilmerRegular = localFont({
  src: "/fonts/GilmerRegular.otf",
  variable: "--font-gilmer-regular",
  style: "normal",
  weight: "400",
});

export const metadata: Metadata = {
  title: "SalaahAI - Your AI-Powered Education Guide",
  description:
    "An AI-driven video bot for personalized student counseling. Engage in real-time with lifelike AI for educational guidance and program recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilmerRegular.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
