import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
          <body className={`${montserrat.variable} antialiased bg-background`}>
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
