import { EXPERIENCES } from "@/features/profile/data/experiences";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="space-y-8">
          {EXPERIENCES.map((experience) => (
            <div key={experience.id} className="group space-y-4 rounded-lg p-4 transition-all duration-200 hover:bg-muted/50">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg group-hover:text-foreground transition-colors">{experience.company}</h3>
                {experience.current && (
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400 shadow-sm">
                    Current
                  </span>
                )}
              </div>
              {experience.positions.map((position, index) => (
                <div key={index} className="space-y-3 border-l-2 border-border pl-4 transition-all duration-200 hover:border-accent-foreground/50">
                  <div>
                    <h4 className="font-medium text-base">{position.title}</h4>
                    <p className="text-xs text-muted-foreground font-medium mt-1">
                      {position.type} • {position.period.start}
                      {position.period.end ? ` — ${position.period.end}` : " — Present"}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                    {position.description}
                  </p>
                  {position.skills && position.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {position.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium transition-all duration-200 hover:bg-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
