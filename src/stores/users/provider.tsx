"use client";

import { type ReactNode, useEffect } from "react";
import { type PublicUser, userStore } from "./store";

type UserProviderProps = {
  user: PublicUser;
  children: ReactNode;
};

const UserProvider = ({ user, children }: UserProviderProps) => {
  const setUser = userStore((state) => state.setUser);
  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  return <>{children}</>;
};

export default UserProvider;
