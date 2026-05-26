"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowRight, Asterisk, Layers, LibraryBig } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

type Project = {
  name: string;
  description: string;
  href: string;
  Icon: LucideIcon;
  iconColor: string;
};

const PROJECTS: Project[] = [
  {
    name: "Shelf",
    description: "Digital Library for Developers",
    href: "#",
    Icon: LibraryBig,
    iconColor: "#ffffff",
  },
  {
    name: "Locale",
    description: "Lightweight Content Localization",
    href: "#",
    Icon: Asterisk,
    iconColor: "#f5b393",
  },
  {
    name: "Taskly",
    description: "Minimal Task Manager",
    href: "#",
    Icon: Layers,
    iconColor: "#5b6cff",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectsSection() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-50%] -right-8 -inset-y-16"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          backgroundPosition: "center center",
          WebkitMaskImage:
            "radial-gradient(ellipse 30% 50% at 35% 50%, black 50%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 30% 50% at 35% 50%, black 50%, transparent 95%)",
        }}
      />
      <div className="relative flex flex-col gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ name, description, href, Icon, iconColor }: Project) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="relative overflow-hidden rounded-2xl bg-button-secondary ring-1 ring-black/40"
      style={{ boxShadow: "rgba(0,0,0,0.24) 0px 0.706592px 0.423955px -0.5px, rgba(0,0,0,0.24) 0px 1.80656px 1.08394px -1px, rgba(0,0,0,0.23) 0px 3.62176px 2.17306px -1.5px, rgba(0,0,0,0.22) 0px 6.8656px 4.11936px -2px, rgba(0,0,0,0.2) 0px 13.6468px 8.18806px -2.5px, rgba(0,0,0,0.16) 0px 30px 18px -3px" }}
    >
      <Link
        href={href}
        className="block"
        aria-label={`View ${name} project`}
      >
        <motion.div
          variants={{
            rest: { x: 0, opacity: 1 },
            hover: { x: 24, opacity: 0 },
          }}
          transition={{ duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 p-3"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-button-tertiary-background">
            <Icon
              className="h-6 w-6"
              style={{ color: iconColor }}
              strokeWidth={2.2}
            />
          </div>
          <div className="flex min-w-0 flex-col">
            <h4 className="text-md font-medium text-foreground-primary">{name}</h4>
            <p className="truncate text-sm text-foreground-tertiary">
              {description}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            rest: { x: -24, opacity: 0 },
            hover: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.35, ease: EASE }}
          className="pointer-events-none absolute inset-0 flex items-center gap-3 p-3"
        >
          <span className="inline-flex items-center gap-2 rounded-xl bg-button-tertiary-background px-4 py-2 text-md text-foreground-primary">
            View <ArrowRight className="h-4 w-4" />
          </span>
          <Icon
            className="h-6 w-6"
            style={{ color: iconColor }}
            strokeWidth={2.2}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
