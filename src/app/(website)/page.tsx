import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";
import CryptoStats from "./_components/crypto-stats";
import FeatureShowcase from "./_components/feature-showcase";
import { Badge } from "@/components/ui/badge";
import Testimonials from "./_components/testimonials";
import PricingSection from "./_components/pricing-section";
import Footer from "./_components/footer";

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
            <Link href="/auth/sign-in">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Come join us
              </Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button
                className="border-primary text-primary hover:bg-accent"
                size="lg"
                variant="outline"
              >
                Access Your Dashboard
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4 text-primary" />
              <span>Bank-grade security</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="h-4 w-4 text-primary" />
              <span>Lightning fast</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>94.7% AI accuracy</span>
            </div>
          </div>

          <div className="mt-20">
            <CryptoStats />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center">
            <h2 className="mb-4 font-bold text-3xl text-foreground">
              What Makes UNIVERSIFY Different
            </h2>

            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform combines cutting-edge AI technology with professional
              trading tools to give you the competitive edge in cryptocurrency
              markets.
            </p>
          </div>

          <FeatureShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="px-4 py-20 sm:px-6 lg:px-8 bg-background/30"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Trusted by Traders
            </Badge>
            <h2 className="mb-4 font-bold text-3xl text-foreground sm:text-4xl text-balance">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Join thousands of successful traders who trust Universify for
              their crypto investments.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Simple Pricing
            </Badge>
            <h2 className="mb-4 font-bold text-3xl text-foreground sm:text-4xl text-balance">
              Choose Your Trading Plan
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Start free and upgrade as you grow. All plans include our core AI
              features.
            </p>
          </div>

          <PricingSection />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground border-0">
            <div className="absolute inset-0 bg-[url('/abstract-crypto-pattern.png')] opacity-10"></div>
            <CardContent className="relative p-12 text-center">
              <h2 className="mb-4 font-bold text-3xl sm:text-4xl text-balance">
                Ready to Transform Your Trading?
              </h2>
              <p className="mb-8 text-primary-foreground/90 text-lg leading-relaxed">
                Join 150K+ traders already using AI to maximize their crypto
                returns. Start your journey to smarter trading today.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/auth/sign-up">
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-muted shadow-lg"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
              <div className="mt-8 text-primary-foreground/80 text-sm">
                <p>
                  Questions? Contact us at{" "}
                  <a
                    className="underline hover:text-primary-foreground transition-colors"
                    href="mailto:hello@universify.com"
                  >
                    hello@universify.com
                  </a>{" "}
                  or call{" "}
                  <a
                    className="underline hover:text-primary-foreground transition-colors"
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

      <Footer />
    </div>
  );
}
