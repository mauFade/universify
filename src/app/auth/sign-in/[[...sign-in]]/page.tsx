import SignInView from "@/features/auth/sign-in-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Sign In",
  description: "Sign In page for authentication.",
};

const Page = () => {
  return <SignInView />;
};

export default Page;
