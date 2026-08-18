import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CodeIcon, DatabaseIcon, LayersIcon, HeartIcon, BrainIcon, SparkleIcon } from "./icons";

const GROUPS = [
  {
    icon: CodeIcon,
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "ReactJS"],
  },
  {
    icon: DatabaseIcon,
    title: "Database Administration",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: LayersIcon,
    title: "Tools & Platforms",
    items: ["Git", "cPanel", "phpMyAdmin"],
  },
  {
    icon: HeartIcon,
    title: "Problem-Solving & Teamwork",
    items: ["Collaboration", "Ownership", "Adaptability"],
  },
  {
    icon: BrainIcon,
    title: "Critical Thinking & Communication",
    items: ["Analysis", "Documentation", "Client Communication"],
  },
  {
    icon: SparkleIcon,
    title: "AI Engineering",
    items: ["Currently Learning"],
    accent: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="SKILLS"
            title="Tools & technologies I work with"
            description="A practical toolkit built through real client work — from full-stack development to database administration."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map(({ icon: Icon, title, items, accent }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <p className="mt-5 font-display text-base font-bold text-ink">{title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        accent
                          ? "border-accent/30 bg-accent-soft text-accent"
                          : "border-border bg-canvas text-muted"
                      }`}
                    >
                      {item}
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
