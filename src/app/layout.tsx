import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import "./styles/globals.css";
import "./styles/radix-scrollarea.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenreTags from "@/components/GenreTags";

export const metadata: Metadata = {
  title: "Social Network",
  description: "Social Media Network created by Matt Vandersluys for Tech Educators Project Week ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-svh flex flex-col">
          <GenreTags/>
          <Header/>
          <main className="flex-grow flex flex-col items-center">
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}