import { MapPinIcon, MailIcon, PhoneIcon, GlobeIcon } from "lucide-react";
import { USER } from "@/features/profile/data/user";
import { Panel, PanelContent, PanelHeader } from "./panel";

export function Overview() {
  return (
    <Panel>
      <PanelHeader>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-medium">{USER.currentRole}</span>
            {USER.currentCompany && (
              <>
                <span>@</span>
                <span>{USER.currentCompany}</span>
              </>
            )}
          </div>
        </div>
      </PanelHeader>

      <PanelContent>
        <div className="grid gap-3 text-sm">
          {USER.location && (
            <div className="group flex items-center gap-3 text-muted-foreground transition-colors duration-200 hover:text-foreground">
              <MapPinIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              <span className="font-medium">{USER.location}</span>
            </div>
          )}

          {USER.phone && (
            <div className="group flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:scale-110" />
              <a
                href={`tel:${USER.phone}`}
                className="font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {USER.phone}
              </a>
            </div>
          )}

          {USER.email && (
            <div className="group flex items-center gap-3">
              <MailIcon className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:scale-110" />
              <a
                href={`mailto:${USER.email}`}
                className="font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {USER.email}
              </a>
            </div>
          )}

          {USER.website && (
            <div className="group flex items-center gap-3 text-muted-foreground transition-colors duration-200 hover:text-foreground">
              <GlobeIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              <span className="font-medium">{USER.website}</span>
            </div>
          )}

          {USER.gender && (
            <div className="text-muted-foreground font-medium">
              {USER.gender}
            </div>
          )}
        </div>
      </PanelContent>
    </Panel>
  );
}
