import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full overflow-hidden border-x border-border/40 transition-all duration-300",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[100vw] -z-10 h-full w-[200vw] opacity-50"
        style={
          {
            backgroundImage:
              "repeating-linear-gradient(315deg,hsl(var(--border)) 0,hsl(var(--border)) 1px,transparent 0,transparent 50%)",
            backgroundSize: "10px 10px",
          }
        }
      />
    </div>
  );
}
