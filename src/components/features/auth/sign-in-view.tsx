"use client";

import { Lock } from "lucide-react";
import { dark } from "@clerk/themes";

import Navigation from "./navigation";
import { SignIn } from "@clerk/nextjs";
import { useTheme } from "@/providers/theme-provider";

const SignInView = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <Navigation />
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md flex items-center flex-col">
          <div className="text-center mb-8">
            <div className="size-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Lock className="size-6 text-primary-foreground font-black" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Welcome!
            </h1>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          <SignIn
            appearance={{
              theme: theme === "dark" ? dark : undefined,
            }}
            forceRedirectUrl="/webapp/dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInView;
