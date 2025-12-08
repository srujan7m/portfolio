import { PROJECTS } from "@/features/profile/data/projects";
import { ExternalLinkIcon } from "lucide-react";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";

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
        <FadeInStagger staggerDelay={0.1}>
          <div className="space-y-6">
            {PROJECTS.map((project, index) => (
              <FadeInStaggerItem key={project.id}>
                <div 
                  className="group space-y-3 rounded-lg p-4 transition-all duration-300 hover:bg-muted/50 hover:shadow-lg hover:shadow-blue-500/5 hover:border-l-2 hover:border-blue-500"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold group-hover:text-blue-500 transition-colors duration-300">{project.title}</h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-500 transition-all duration-200 hover:scale-110 hover:rotate-12"
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
                        className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium transition-all duration-200 hover:bg-linear-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border hover:border-blue-500/30 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </PanelContent>
    </Panel>
  );
}
