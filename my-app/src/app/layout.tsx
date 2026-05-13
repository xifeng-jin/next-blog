import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
// import "@/app/globals.css";
import type { Metadata } from "next";
import { WebVitals } from "@/component/web-vitals";

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
      <head>
        {/* 添加谷歌字体链接 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
                        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 
                        sans-serif;
          }
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*  将副作用独立成组件 */}
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
