const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="font-bold text-xl text-foreground">
                Universify
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              The future of cryptocurrency trading, powered by artificial
              intelligence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="hover:text-foreground transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="hover:text-foreground transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#help-center"
                  className="hover:text-foreground transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#documentation"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#status"
                  className="hover:text-foreground transition-colors"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-foreground transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Universify. All rights reserved.
            Built with ❤️ for crypto traders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
