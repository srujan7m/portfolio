import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { TechIcons } from "@/components/tech-icons";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function SocialLinks() {
  return (
    <Panel id="social">
      <PanelHeader>
        <PanelTitle>Social Links</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="flex flex-wrap gap-3">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = TechIcons[link.icon as keyof typeof TechIcons];
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-2.5 rounded-lg border border-border bg-muted/30 px-5 py-3 text-sm transition-all duration-300 hover:bg-linear-to-br hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="h-5 w-5 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span className="font-medium relative z-10 group-hover:font-semibold transition-all">{link.title}</span>
              </a>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
