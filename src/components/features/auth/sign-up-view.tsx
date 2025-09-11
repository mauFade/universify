"use client";

import { useTheme } from "@/providers/theme-provider";
import Navigation from "./navigation";
import { Lock } from "lucide-react";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SignUpView = () => {
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

          <SignUp
            appearance={{
              theme: theme === "dark" ? dark : undefined,
            }}
            forceRedirectUrl="/webapp"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
