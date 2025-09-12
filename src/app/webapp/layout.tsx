import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/sidebar";
import AppHeader from "@/components/layout/header";
import { currentUser } from "@clerk/nextjs/server";
import Client from "./client";
import { findByEmailOrInsert } from "@/server/db/repositories/user";
import UserProvider from "@/stores/users/provider";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clerkUser = await currentUser();

  if (!clerkUser || !clerkUser.fullName) {
    return <Client />;
  }

  const user = await findByEmailOrInsert({
    firstName: clerkUser.firstName || clerkUser.fullName,
    lastName: clerkUser.lastName || "",
    email: clerkUser.emailAddresses[0].emailAddress,
    clerkUserId: clerkUser.id,
    avatar: clerkUser.imageUrl,
    hasAvatar: clerkUser.hasImage,
  });

  return (
    <UserProvider user={user}>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <AppHeader />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </SidebarProvider>
    </UserProvider>
  );
}
