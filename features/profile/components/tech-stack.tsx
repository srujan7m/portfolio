import { TECH_STACK } from "@/features/profile/data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { TechIcons } from "@/components/tech-icons";

export function TechStack() {
  return (
    <Panel id="tech-stack">
      <PanelHeader>
        <PanelTitle>Tech Stack</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => {
            const Icon = TechIcons[tech.key as keyof typeof TechIcons];
            return (
              <a
                key={tech.key}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:bg-accent hover:border-accent-foreground/20 hover:-translate-y-0.5 hover:shadow-sm"
                title={tech.categories.join(", ")}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {tech.title}
              </a>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
