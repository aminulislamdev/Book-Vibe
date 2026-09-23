import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './shared/Navbar'
import Footer from "./shared/Footer";
import BookContextProvider from "./context/BookContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "Book Vibe website",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BookContextProvider>
          <Navbar />
          {children}
          <Footer></Footer>
        </BookContextProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
