import { PROJECTS } from "@/features/profile/data/projects";
import { ExternalLinkIcon } from "lucide-react";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group space-y-3 rounded-lg p-4 transition-all duration-200 hover:bg-muted/50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold group-hover:text-foreground transition-colors">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {project.period.start}
                    {project.period.end ? ` — ${project.period.end}` : " — Present"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium transition-all duration-200 hover:bg-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
