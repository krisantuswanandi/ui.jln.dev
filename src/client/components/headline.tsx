"use client";

import * as Icons from "@/client/components/icons";
import { Logo } from "@/client/components/logo";
import { cn } from "@/client/lib/cn";

import { Coffee } from "lucide-react";

export const Headline = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Logo className="size-10" />
      <h1
        className={cn(
          "animate relative flex flex-wrap items-center justify-center gap-2 text-lg font-bold max-lg:text-center lg:text-5xl",
        )}
      >
        <span className="rounded-lg bg-primary px-2 py-1  tabular-nums text-primary-foreground lg:px-4 lg:py-2">
          10.000+
        </span>
        Themes for shadcn/ui
      </h1>

      <div className="pt-6">
        <div className="flex flex-col items-center gap-1.5 text-sm text-muted-foreground">
          <p className="text-center">
            Found an awesome theme? Consider supporting me.
          </p>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <a
              href="https://x.com/jlndev"
              className="flex items-center gap-2 rounded border border-accent-foreground/20 bg-accent  px-4 py-0.5 text-sm text-accent-foreground"
            >
              <Icons.Xcom className="size-4" />
              <span className="font-medium">
                Built by <span className="font-bold">jlndev</span>
              </span>
            </a>
            <a
              href="https://www.buymeacoffee.com/jlndev"
              className="flex items-center gap-1 rounded border border-muted-foreground/20 bg-muted px-4 py-0.5 font-medium text-muted-foreground "
            >
              <Coffee className="size-4" />
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
