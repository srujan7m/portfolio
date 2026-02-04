"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import { Project } from "@/features/profile/data/projects";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

interface ExpandableProjectCardProps {
  project: Project;
  className?: string;
}

const gradients = [
  "from-indigo-500/70 via-purple-500/60 to-pink-500/50",
  "from-blue-500/70 via-cyan-500/60 to-emerald-500/40",
  "from-amber-500/70 via-orange-500/60 to-rose-500/40",
  "from-slate-900/80 via-slate-800/60 to-slate-700/50",
];

const formatDescription = (description: string) =>
  description.trim().split(/\n\s*\n/).map((block, index) => {
    const html = block
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
    return (
      <p
        key={`${block}-${index}`}
        className="text-sm leading-relaxed text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });

export function ExpandableProjectCard({ project, className }: ExpandableProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeModal = useCallback(() => setExpanded(false), []);
  useOutsideClick(modalRef, closeModal, expanded);

  const gradientClass = useMemo(() => {
    const index = Math.abs(project.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % gradients.length;
    return gradients[index];
  }, [project.id]);

  const previewText = useMemo(
    () => project.description.replace(/\*\*/g, "").replace(/`/g, ""),
    [project.description]
  );

  return (
    <>
      <motion.article
        layout
        onClick={() => setExpanded(true)}
        className={cn(
          "group cursor-pointer overflow-hidden rounded-3xl border border-border/60 bg-background/70",
          "shadow-[0_25px_60px_rgba(15,23,42,0.15)] transition-all duration-300",
          "hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_30px_80px_rgba(99,102,241,0.25)]",
          className
        )}
      >
        <div className="aspect-4/3 w-full overflow-hidden rounded-b-[2.5rem] bg-slate-900">
          <div className={cn("h-full w-full bg-linear-to-br", gradientClass)}>
            <div className="flex h-full flex-col justify-between p-6 text-white">
              <div className="text-xs uppercase tracking-[0.35em] text-white/70">{project.period.start}</div>
              <div>
                <p className="text-sm text-white/70">{project.myRole ?? "Builder"}</p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 p-6">
          <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-line">
            {previewText}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.skills.slice(0, 4).map((skill) => (
              <span key={skill} className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground">
                {skill}
              </span>
            ))}
            {project.skills.length > 4 ? (
              <span className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground">
                +{project.skills.length - 4} more
              </span>
            ) : null}
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-4xl border border-border/80 bg-white/95 p-8 text-slate-900 shadow-[0_30px_120px_rgba(15,23,42,0.35)] dark:border-white/15 dark:bg-slate-950/90 dark:text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute right-5 top-5 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-600 shadow-sm dark:border-white/20 dark:bg-white/10 dark:text-white/70"
              >
                Close
              </button>
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {project.period.start}
                    {project.period.end ? ` · ${project.period.end}` : " · Present"}
                  </p>
                  <h2 className="text-3xl font-semibold text-foreground">{project.title}</h2>
                  {project.myRole && (
                    <p className="text-sm font-medium text-emerald-400">{project.myRole}</p>
                  )}
                </div>
                <div className="space-y-3">{formatDescription(project.description)}</div>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-500/20"
                  >
                    Visit project <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
