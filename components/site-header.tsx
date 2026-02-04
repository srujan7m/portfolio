"use client";

import Link from "next/link";
import { MAIN_NAV } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="mx-auto flex h-16 max-w-3xl items-center px-4 md:px-6">
        <Link href="/" className="group relative text-base font-semibold tracking-tight transition-colors hover:text-blue-500">
          <span>Srujan Mattur</span>
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
        </Link>
        <div className="hidden flex-1 justify-center md:flex">
          <SpotlightNavbar
            items={MAIN_NAV.map((item) => ({ label: item.title, href: item.href }))}
            className="w-full max-w-xl"
          />
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
