import { EXPERIENCES } from "@/features/profile/data/experiences";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <FadeInStagger staggerDelay={0.15}>
          <div className="space-y-8">
            {EXPERIENCES.map((experience) => (
              <FadeInStaggerItem key={experience.id}>
                <div 
                  className="group space-y-4 rounded-lg p-4 transition-all duration-300 hover:bg-linear-to-br hover:from-muted/50 hover:to-muted/30 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors duration-300">{experience.company}</h3>
                    {experience.current && (
                      <span className="relative rounded-full bg-linear-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400 shadow-sm border border-green-500/30 animate-float">
                        <span className="absolute inset-0 rounded-full bg-green-500/10 blur-sm animate-pulse" />
                        <span className="relative">Current</span>
                      </span>
                    )}
                  </div>
                  {experience.positions.map((position, index) => (
                    <div key={index} className="space-y-3 border-l-2 border-border pl-4 transition-all duration-300 hover:border-blue-500/50 hover:pl-5">
                      <div>
                        <h4 className="font-medium text-base group-hover:text-foreground transition-colors">{position.title}</h4>
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
                              className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium transition-all duration-200 hover:bg-linear-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border hover:border-blue-500/30 hover:scale-105 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </PanelContent>
    </Panel>
  );
}
