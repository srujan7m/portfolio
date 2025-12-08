import { USER } from "@/features/profile/data/user";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about" className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="relative rounded-lg border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 p-4 animate-fade-in-up">
          <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
            {USER.about}
          </p>
        </div>
      </PanelContent>
    </Panel>
  );
}
