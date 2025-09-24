import { create } from "zustand";
import { persist } from "zustand/middleware";
import superjson from "superjson";

export type PublicUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string | null;
  isAdmin: boolean;
};

type userState = {
  user: PublicUser | null;
  setUser: (user: PublicUser) => void;
  clearUser: () => void;
};

export const userStore = create<userState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-store",
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) {
            return null;
          }
          return superjson.parse(str) as { state: userState };
        },
        setItem: (name, value) => {
          localStorage.setItem(name, superjson.stringify(value));
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    },
  ),
);
