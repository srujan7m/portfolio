import Link from "next/link";
import { MAIN_NAV } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="group font-semibold text-base tracking-tight hover:text-blue-500 transition-colors relative">
            <span>Portfolio</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-200"
              >
                {item.title}
                <span className="absolute inset-x-3 -bottom-1 h-px bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
