import { USER } from "@/features/profile/data/user";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground font-medium">Built by {USER.displayName}</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
