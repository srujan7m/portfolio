"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { animate } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface SpotlightNavItem {
  label: string;
  href: string;
}

export interface SpotlightNavbarProps {
  items?: SpotlightNavItem[];
  className?: string;
  onItemClick?: (item: SpotlightNavItem, index: number) => void;
  defaultActiveIndex?: number;
}

export function SpotlightNavbar({
  items = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "/projects" },
  ],
  className,
  onItemClick,
  defaultActiveIndex = 0,
}: SpotlightNavbarProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const spotlightX = useRef(0);
  const ambienceX = useRef(0);
  const pathname = usePathname();

  const sanitizedItems = useMemo(() => items.filter(Boolean), [items]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const currentHash = window.location.hash;
    const matchIndex = sanitizedItems.findIndex((item) => {
      if (item.href.startsWith("#")) {
        return currentHash === item.href;
      }
      return item.href === pathname;
    });
    if (matchIndex >= 0) {
      requestAnimationFrame(() => setActiveIndex(matchIndex));
    }
  }, [pathname, sanitizedItems]);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = event.clientX - rect.left;
      setHoverX(x);
      spotlightX.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      const activeItem = nav.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`);
      if (!activeItem) return;
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(spotlightX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (value) => {
          spotlightX.current = value;
          nav.style.setProperty("--spotlight-x", `${value}px`);
        },
      });
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`);
    if (!activeItem) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const targetX = itemRect.left - navRect.left + itemRect.width / 2;

    animate(ambienceX.current, targetX, {
      type: "spring",
      stiffness: 200,
      damping: 20,
      onUpdate: (value) => {
        ambienceX.current = value;
        nav.style.setProperty("--ambience-x", `${value}px`);
      },
    });
  }, [activeIndex, sanitizedItems]);

  const handleAnchorNavigation = (href: string) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector<HTMLElement>(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: SpotlightNavItem,
    index: number
  ) => {
    if (item.href.startsWith("#")) {
      event.preventDefault();
      handleAnchorNavigation(item.href);
    }
    setActiveIndex(index);
    onItemClick?.(item, index);
  };

  return (
    <div className={cn("relative flex justify-center", className)}>
      <nav
        ref={navRef}
        className={cn(
          "spotlight-nav relative h-11 rounded-full border border-border/60 bg-background/80",
          "px-1 py-0.5 text-sm text-foreground/80 shadow-[0_15px_60px_rgba(0,0,0,0.15)]",
          "dark:bg-foreground/5 backdrop-blur-2xl overflow-hidden"
        )}
      >
        <ul className="relative z-10 flex h-full items-center gap-1">
          {sanitizedItems.map((item, index) => (
            <li key={item.label} className="relative h-full">
              <Link
                href={item.href}
                data-index={index}
                onClick={(event) => handleItemClick(event, item, index)}
                className={cn(
                  "flex h-full items-center rounded-full px-4 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                  activeIndex === index
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
          style={{
            opacity: hoverX !== null ? 1 : 0,
            background: `radial-gradient(120px circle at var(--spotlight-x) 100%, var(--spotlight-color, rgba(0,0,0,0.08)) 0%, transparent 50%)`,
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-20 h-0.5 w-full"
          style={{
            background: `radial-gradient(60px circle at var(--ambience-x) 0%, var(--ambience-color, rgba(0,0,0,0.85)) 0%, transparent 100%)`,
          }}
        />
      </nav>

      <style jsx>{`
        .spotlight-nav {
          --spotlight-color: rgba(0, 0, 0, 0.08);
          --ambience-color: rgba(0, 0, 0, 0.85);
        }
        :global(.dark) .spotlight-nav {
          --spotlight-color: rgba(255, 255, 255, 0.15);
          --ambience-color: rgba(255, 255, 255, 0.95);
        }
      `}</style>
    </div>
  );
}
