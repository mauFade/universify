"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";
import type { ReactNode } from "react";

type GraphsErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const GraphsErrorFallback = ({
  error,
  resetErrorBoundary,
}: GraphsErrorFallbackProps) => {
  return (
    <Card className="border-red-500 transition-all duration-500 ease-out hover:scale-[1.015] hover:shadow-md">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="font-medium text-red-500 text-sm">
          Error!
        </CardTitle>
        <AlertTriangle className="size-4 text-red-500" />
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground text-sm">{error.message}</p>
          <Button
            className="flex w-full items-center gap-2"
            onClick={resetErrorBoundary}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="size-3" />
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

type GraphsErrorBoundaryProps = {
  children: ReactNode;
  onReset?: () => void;
};

const GraphsErrorBoundary = ({
  children,
  onReset,
}: GraphsErrorBoundaryProps) => {
  const handleError = (
    _error: Error,
    _errorInfo: { componentStack?: string | null },
  ) => {
    // Here you could send to an error tracking service like Sentry
    // Example: Sentry.captureException(error, { tags: { Graphs: GraphsName } });
  };

  return (
    <ErrorBoundary
      FallbackComponent={GraphsErrorFallback}
      onError={handleError}
      onReset={onReset}
    >
      {children}
    </ErrorBoundary>
  );
};

export default GraphsErrorBoundary;
