import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/fade-in";
import { PROJECTS } from "@/features/profile/data/projects";
import { ExpandableProjectCard } from "@/components/ui/expandable-project-card";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen min-h-screen overflow-x-hidden px-2 pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="mt-12 rounded-3xl border border-border/60 bg-background/80 p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.25)]">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Projects archive</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              Every build, from hackathons to solo dev sprints
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Dive into the full stack of experiments—each card expands with context, roles,
              and the tech I shipped to get it live.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <FadeIn key={project.id} delay={0.05 * index}>
                <ExpandableProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
