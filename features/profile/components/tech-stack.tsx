import { TECH_STACK } from "@/features/profile/data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { TechIcons } from "@/components/tech-icons";
import { FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";

export function TechStack() {
  return (
    <Panel id="tech-stack">
      <PanelHeader>
        <PanelTitle>Tech Stack</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <FadeInStagger staggerDelay={0.05}>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech, index) => {
              const Icon = TechIcons[tech.key as keyof typeof TechIcons];
              return (
                <FadeInStaggerItem key={tech.key}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:bg-linear-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                    title={tech.categories.join(", ")}
                  >
                    {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />}
                    <span className="group-hover:font-semibold transition-all">{tech.title}</span>
                  </a>
                </FadeInStaggerItem>
              );
            })}
          </div>
        </FadeInStagger>
      </PanelContent>
    </Panel>
  );
}
