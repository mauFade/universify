import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Universify | Unleash the Power of AI for crypto wallets",
  description:
    "Universify is a platform that helps you to reach the full earning potential of your crypto wallets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider defaultTheme="dark" storageKey="universify-theme">
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-background to-muted/60`}
          >
            <TRPCReactProvider>
              <TooltipProvider>
                {children}
                <Toaster />
              </TooltipProvider>
            </TRPCReactProvider>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
