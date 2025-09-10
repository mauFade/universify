import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universify | AI-Powered Cryptocurrency Platform",
  description:
    "The future of cryptocurrency trading. All your trading and portfolio management in one intelligent platform. Boost your crypto investments with AI-powered market analysis and automated trading strategies.",
  keywords: [
    "cryptocurrency",
    "trading",
    "AI",
    "LLM",
    "portfolio management",
    "market analysis",
    "automated trading",
    "blockchain",
  ],
  openGraph: {
    title: "Universify | AI-Powered Cryptocurrency Platform",
    description:
      "The future of cryptocurrency trading. All your trading and portfolio management in one intelligent platform.",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-bold text-4xl text-foreground tracking-tight sm:text-6xl">
            The Future of{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
              Cryptocurrency Trading
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-lg leading-8">
            Universify is revolutionizing how traders approach cryptocurrency
            markets. Our LLM-powered platform combines intelligent automation
            with advanced analytics to maximize your trading potential.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/auth/sign-up">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Start Trading with AI
              </Button>
            </Link>
            <Link href="/auth/sign-in">
              <Button
                className="border-primary text-primary hover:bg-accent"
                size="lg"
                variant="outline"
              >
                Access Your Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl text-foreground">
              What Makes UNIVERSIFY Different
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Built to enhance your trading, not replace it. Our platform
              combines human intuition with LLM-powered intelligence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border transition-shadow hover:shadow-lg bg-card hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground text-xl">
                  LLM-Powered Analysis
                </h3>
                <p className="text-muted-foreground">
                  Advanced language models that analyze market sentiment,
                  predict price movements, and suggest optimal trading
                  strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-shadow hover:shadow-lg bg-card hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground text-xl">
                  Real-Time Analytics
                </h3>
                <p className="text-muted-foreground">
                  Live insights into market trends, portfolio performance, and
                  trading metrics that drive profitable decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-shadow hover:shadow-lg bg-card hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground text-xl">
                  Automated Trading
                </h3>
                <p className="text-muted-foreground">
                  AI-powered trading bots that execute strategies based on
                  market conditions and your risk preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 font-bold text-2xl">
                Ready to Transform Your Trading?
              </h2>
              <p className="mb-6 text-primary-foreground/80">
                Sign up now to start leveraging AI for smarter cryptocurrency
                trading and portfolio management.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/auth/sign-up">
                  <Button
                    className="bg-background text-foreground hover:bg-muted"
                    size="lg"
                    variant="secondary"
                  >
                    Join UNIVERSIFY Today
                  </Button>
                </Link>
              </div>
              <div className="mt-6 text-primary-foreground/80 text-sm">
                <p>
                  Questions? Reach us at{" "}
                  <a
                    className="underline hover:text-primary-foreground"
                    href="mailto:hello@universify.com"
                  >
                    hello@universify.com
                  </a>{" "}
                  or call{" "}
                  <a
                    className="underline hover:text-primary-foreground"
                    href="tel:1-800-UNIVERSIFY"
                  >
                    1-800-UNIVERSIFY
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
