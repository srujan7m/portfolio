"use client";

import Image from "next/image";
import { USER } from "@/features/profile/data/user";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { GlassDock } from "@/components/ui/glass-dock";

export function ProfileHeader() {
  return (
    <section className="border-x border-edge bg-linear-to-br from-background via-background/95 to-background p-6 transition-colors duration-300">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-center">
          <Image
            src="/images/portfolio-logo.jpeg"
            alt="Portfolio logo"
            width={160}
            height={120}
            className="rounded-2xl border border-border/70 bg-background/60 p-3 shadow-[0_15px_45px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div className="flex-1 min-w-0 space-y-3 text-center md:text-left">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">{USER.displayName}</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">{USER.bio}</p>
        </div>
        <GlassDock items={SOCIAL_LINKS} showLabels={false} className="justify-start md:justify-end" />
      </div>
    </section>
  );
}
