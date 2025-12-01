import Link from "next/link";
import { MAIN_NAV } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-semibold text-base tracking-tight hover:text-muted-foreground transition-colors">
            Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-accent transition-all duration-200"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
