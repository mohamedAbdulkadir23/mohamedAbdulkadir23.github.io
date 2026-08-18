import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { MapPinIcon, GraduationCapIcon, SparkleIcon } from "./icons";

const HIGHLIGHTS = [
  {
    icon: GraduationCapIcon,
    title: "BSc Computer Science",
    detail: "SIMAD University · Semester 8 completed · Expected 2026",
  },
  {
    icon: MapPinIcon,
    title: "Based in Nairobi, Kenya",
    detail: "Open to remote and on-site opportunities",
  },
  {
    icon: SparkleIcon,
    title: "AI Engineering",
    detail: "Currently deepening my skills in AI & intelligent systems",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="ABOUT ME"
            title="Building reliable software, one system at a time"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-muted">
              I'm a Computer Science student at SIMAD University with almost three
              years of hands-on experience in web development and database
              administration. I design user-friendly web applications, manage and
              optimize relational and non-relational databases, and enjoy solving
              problems as part of a team. I'm presently honing my skills in AI
              Engineering and other evolving technologies, and I'm always looking
              for new ways to build solutions with technology.
            </p>
          </Reveal>

          <div className="flex flex-col gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, detail }, i) => (
              <Reveal key={title} delay={140 + i * 90}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{title}</p>
                    <p className="mt-1 text-sm text-muted">{detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
