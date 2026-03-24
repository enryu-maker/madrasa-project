"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ReactNode, useState } from "react";
import { Toaster as RadixToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

export default function Providers({ children }: { children: ReactNode }) {
  // QueryClient must be initialized inside the component to ensure its state is
  // isolated to the current request in a Server/Client environment.
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          {children}
          <RadixToaster />
          <SonnerToaster position="top-center" richColors closeButton />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
