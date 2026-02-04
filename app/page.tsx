import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/page-separator";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Overview } from "@/features/profile/components/overview";
import { About } from "@/features/profile/components/about";
import { TechStack } from "@/features/profile/components/tech-stack";
import { Projects } from "@/features/profile/components/projects";
import { Experiences } from "@/features/profile/components/experiences";
import { FadeIn } from "@/components/fade-in";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen min-h-screen overflow-x-hidden px-2 pb-12">
        <div className="mx-auto md:max-w-3xl">
          <div className="h-12" />
          <ProfileHeader />
          <Separator />
          <FadeIn delay={0.1}>
            <Overview />
          </FadeIn>
          <Separator />
          <FadeIn delay={0.2}>
            <About />
          </FadeIn>
          <Separator />
          <FadeIn delay={0.25}>
            <Projects />
          </FadeIn>
          <Separator />
          <FadeIn delay={0.3}>
            <TechStack />
          </FadeIn>
          <Separator />
          <FadeIn delay={0.35}>
            <Experiences />
          </FadeIn>
          <div className="h-12 border-x border-border" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
