import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "Blog create by next.js",
  // icons: "/favicon.ico"
  // 做适配
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16*16', type: 'image/x-icon'},
      { url: '/favicon.ico', sizes: '32*32', type: 'image/x-icon'},
      { url: '/favicon.ico', sizes: '192*192', type: 'image/x-icon'},
      { url: '/favicon.ico', sizes: '512*512', type: 'image/x-icon'},
    ],
    shortcut: '/favicon.ico',
    apple: [{
      url: '/favicon.ico', sizes: '180*180', type: 'image/x-icon'
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
