import Link from "next/link";
import { PROJECTS } from "@/features/profile/data/projects";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";
import { ExpandableProjectCard } from "@/components/ui/expandable-project-card";

export function Projects() {
  const FEATURED_PROJECTS = PROJECTS.slice(0, 2);

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 select-none font-mono text-sm text-muted-foreground">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>
      <PanelContent>
        <FadeInStagger staggerDelay={0.15} trigger="immediate">
          <div className="grid gap-6 md:grid-cols-2">
            {FEATURED_PROJECTS.map((project) => (
              <FadeInStaggerItem key={project.id}>
                <ExpandableProjectCard project={project} />
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
        <div className="mt-6 flex justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            More projects
            <span aria-hidden>→</span>
          </Link>
        </div>
      </PanelContent>
    </Panel>
  );
}
