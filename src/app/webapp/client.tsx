"use client";

import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Client() {
  const { signOut } = useClerk();

  useEffect(() => {
    toast.error("Unauthorized user.", {
      description: "You need to be logged in to access this page!",
    });
    signOut();
  }, [signOut]);

  return null;
}
