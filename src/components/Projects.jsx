import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CodeIcon, DatabaseIcon, SparkleIcon, ArrowUpRightIcon } from "./icons";

// TODO: swap in real project names, links and screenshots as they ship.
const PROJECTS = [
  {
    icon: CodeIcon,
    title: "Responsive Client Websites",
    description:
      "Designed and maintained responsive, multi-sector websites for clients at SYD ICT Solutions — from planning through deployment.",
    tags: ["HTML/CSS", "JavaScript", "PHP", "Laravel"],
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

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Selected work"
            description="A snapshot of the kind of work I do — practical systems built for real clients and real problems."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map(({ icon: Icon, title, description, tags }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <ArrowUpRightIcon className="h-4.5 w-4.5 text-muted transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-6 font-display text-lg font-bold text-ink">{title}</p>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{description}</p>
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
