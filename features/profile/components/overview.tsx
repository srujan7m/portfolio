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
            <div className="group relative flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-muted/50">
              <div className="absolute inset-0 rounded-md bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MapPinIcon className="h-4 w-4 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500" />
              <span className="font-medium relative z-10">{USER.location}</span>
            </div>
          )}

          {USER.phone && (
            <div className="group relative flex items-center gap-3 rounded-md px-3 py-2">
              <div className="absolute inset-0 rounded-md bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <PhoneIcon className="h-4 w-4 text-muted-foreground relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-green-500" />
              <a
                href={`tel:${USER.phone}`}
                className="font-medium text-muted-foreground hover:text-foreground relative z-10 transition-colors duration-200"
              >
                {USER.phone}
              </a>
            </div>
          )}

          {USER.email && (
            <div className="group relative flex items-center gap-3 rounded-md px-3 py-2">
              <div className="absolute inset-0 rounded-md bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MailIcon className="h-4 w-4 text-muted-foreground relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-500" />
              <a
                href={`mailto:${USER.email}`}
                className="font-medium text-muted-foreground hover:text-foreground relative z-10 transition-colors duration-200"
              >
                {USER.email}
              </a>
            </div>
          )}

          {USER.website && (
            <div className="group relative flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all duration-300 hover:text-foreground">
              <div className="absolute inset-0 rounded-md bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <GlobeIcon className="h-4 w-4 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-500" />
              <span className="font-medium relative z-10">{USER.website}</span>
            </div>
          )}

          {USER.gender && (
            <div className="text-muted-foreground font-medium px-3 py-2">
              {USER.gender}
            </div>
          )}
        </div>
      </PanelContent>
    </Panel>
  );
}
