import ThemeToggle from "@/components/layout/theme-toggle";

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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
