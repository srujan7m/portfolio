"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";
import { cn } from "@/lib/utils";
import { TechIcons } from "@/components/tech-icons";

const githubPath =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";

const GithubLightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d={githubPath} fill="#0B0D12" />
  </svg>
);

const GithubDarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d={githubPath} fill="#FFFFFF" />
  </svg>
);

export type GlassDockItem = {
  title: string;
  href: string;
  icon: keyof typeof TechIcons | string;
};

export interface GlassDockProps {
  items: GlassDockItem[];
  className?: string;
  showLabels?: boolean;
}

export function GlassDock({ items, className, showLabels = true }: GlassDockProps) {
  const dockRef = useRef<HTMLDivElement>(null);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (!dock) return;
      const rect = dock.getBoundingClientRect();
      const x = event.clientX - rect.left;
      dock.style.setProperty("--dock-x", `${x}px`);
      setHasPointer(true);
    };

    const handlePointerLeave = () => {
      setHasPointer(false);
    };

    dock.addEventListener("pointermove", handlePointerMove);
    dock.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      dock.removeEventListener("pointermove", handlePointerMove);
      dock.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={dockRef}
      className={cn(
        "glass-dock relative flex flex-wrap items-center justify-center gap-1 rounded-2xl border border-border",
        "bg-neutral-200 px-2 py-1 text-xs text-slate-700 shadow-[0_15px_60px_rgba(15,23,42,0.25)]",
        "dark:border-white/5 dark:bg-neutral-900 dark:text-white/80",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: hasPointer ? 1 : 0,
          background: "radial-gradient(120px circle at var(--dock-x) 50%, rgba(59,130,246,0.35), transparent 70%)",
        }}
      />
      {items.map((item) => {
        const Icon = TechIcons[item.icon as keyof typeof TechIcons] ?? TechIcons.github;
        const isGithub = (item.icon as string) === "github";
        return (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            className={cn(
              "relative flex items-center gap-1 rounded-2xl px-3 py-1 font-medium text-slate-800 transition-colors hover:text-slate-900 dark:text-white dark:hover:text-white",
              !showLabels && "px-2"
            )}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 dark:border-white/20 dark:bg-white/10 dark:text-white"
            >
              {isGithub ? (
                <>
                  <GithubLightIcon className="h-3.5 w-3.5 dark:hidden" />
                  <GithubDarkIcon className="hidden h-3.5 w-3.5 dark:inline" />
                </>
              ) : (
                <Icon className="h-3.5 w-3.5" />
              )}
            </span>
            {showLabels && <span>{item.title}</span>}
          </a>
        );
      })}
    </div>
  );
}
