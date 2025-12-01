import { USER } from "@/features/profile/data/user";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
          {USER.about}
        </p>
      </PanelContent>
    </Panel>
  );
}
