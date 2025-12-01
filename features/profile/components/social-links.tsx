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
          {SOCIAL_LINKS.map((link) => {
            const Icon = TechIcons[link.icon as keyof typeof TechIcons];
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-lg border border-border bg-muted/30 px-5 py-3 text-sm transition-all duration-200 hover:bg-accent hover:border-accent-foreground/30 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                <span className="font-medium">{link.title}</span>
              </a>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
