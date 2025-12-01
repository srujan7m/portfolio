import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-border/40",
        "before:absolute before:-left-[100vw] before:-z-10 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,hsl(var(--border))_0,hsl(var(--border))_1px,transparent_0,transparent_50%)] before:bg-[length:10px_10px] before:opacity-50",
        "transition-all duration-300",
        className
      )}
    />
  );
}
