import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  CodeIcon,
  DatabaseIcon,
  SparkleIcon,
  LayersIcon,
  BrainIcon,
  CalendarIcon,
  ArrowUpRightIcon,
} from "./icons";

// TODO: confirm the one-line descriptions, tech tags and add live links/screenshots.
const FEATURED = [
  {
    icon: LayersIcon,
    title: "Barbariye System",
    role: "Full Stack Web Developer",
    description:
      "A large-scale management system built with a development team. I worked across the stack — database schema and APIs on the back end, and the interfaces the system is operated from day to day.",
    tags: ["Full Stack", "REST API", "MySQL", "Team Project"],
  },
  {
    icon: CodeIcon,
    title: "Bidhaamiye",
    role: "Web Developer",
    description:
      "Built the web experience for Bidhaamiye — a clean, responsive interface that stays fast and readable from mobile screens up to desktop.",
    tags: ["HTML/CSS", "JavaScript", "Responsive UI"],
  },
  {
    icon: CalendarIcon,
    title: "Evensahal",
    role: "Full Stack Developer",
    description:
      "An event platform covering the full flow: the user-facing screens people book and browse through, plus the back-end services and database that keep everything in sync.",
    tags: ["Full Stack", "Authentication", "Database Design"],
  },
  {
    icon: BrainIcon,
    title: "SIMAD Digital Repository",
    role: "Full Stack Developer",
    badge: "Powered by AI",
    description:
      "A digital repository for academic work at SIMAD University, with AI-assisted search and discovery layered on top of the archive so documents are actually findable.",
    tags: ["AI", "Search", "Full Stack", "Database"],
  },
];

const OTHER = [
  {
    icon: CodeIcon,
    title: "Responsive Client Websites",
    description:
      "Designed and maintained responsive, multi-sector websites for clients at SYD ICT Solutions — from planning through deployment.",
    tags: ["PHP", "Laravel", "JavaScript"],
  },
  {
    icon: DatabaseIcon,
    title: "Relational Database Systems",
    description:
      "Managed and optimized MySQL, PostgreSQL and MongoDB databases, building backup systems and tuning queries for performance.",
    tags: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: SparkleIcon,
    title: "AI-Powered Solutions",
    description:
      "Applying AI Engineering fundamentals to build intelligent, data-driven features on top of existing web and database systems.",
    tags: ["Python", "Machine Learning", "In Progress"],
  },
];

function Tags({ tags }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border bg-canvas px-3 py-1 text-xs font-medium text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Selected work"
            description="Large systems I helped build alongside development teams, plus the day-to-day work behind them."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {FEATURED.map(({ icon: Icon, title, role, badge, description, tags }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <ArrowUpRightIcon className="h-4.5 w-4.5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <p className="font-display text-lg font-bold text-ink">{title}</p>
                  {badge && (
                    <span className="rounded-full border border-border bg-canvas px-2.5 py-0.5 text-[11px] font-semibold text-muted">
                      {badge}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                  {role}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
                <Tags tags={tags} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-16 font-display text-sm font-bold uppercase tracking-wide text-muted">
            Also working on
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {OTHER.map(({ icon: Icon, title, description, tags }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 font-display text-base font-bold text-ink">{title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
                <Tags tags={tags} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
