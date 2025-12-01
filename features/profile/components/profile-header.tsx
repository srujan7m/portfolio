import Image from "next/image";
import { USER } from "@/features/profile/data/user";

export function ProfileHeader() {
  return (
    <div className="flex items-center gap-5 border-x border-edge p-6 transition-all duration-300">
      <div className="group relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-border transition-all duration-300 hover:border-accent-foreground/50 hover:scale-105 hover:shadow-lg">
        <Image
          src={USER.avatar}
          alt={USER.displayName}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>

      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold truncate mb-1 tracking-tight">{USER.displayName}</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">{USER.bio}</p>
      </div>
    </div>
  );
}
