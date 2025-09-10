import ThemeToggle from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-border border-b bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <a
            className="flex items-center transition-opacity hover:opacity-80"
            href="/"
          >
            <div className="flex items-center font-bold text-2xl">
              <span className="text-primary">Universify</span>
            </div>
          </a>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden items-center space-x-4 md:flex">
              <Link href="/auth/sign-in">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
