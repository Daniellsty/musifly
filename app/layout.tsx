import  { Toaster } from 'react-hot-toast';

import type { Metadata, Viewport } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import Player from '@/components/MusicPlayer/Player';

const font = Inria_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "musifly",
  description: "listen to musifly!",
  
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      </head>
      <body className={`${font.className} h-full w-full`}>
        <SupabaseProvider>
          <UserProvider>
          <Toaster />
            <ModalProvider />
            <SideBar>
              {children}
            </SideBar>
            <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
