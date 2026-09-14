import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { BriefcaseIcon, GraduationCapIcon } from "./icons";

const TIMELINE = [
  {
    icon: BriefcaseIcon,
    kind: "Work",
    title: "Freelance Full Stack Developer",
    org: "Freelance — Remote",
    period: "2022 – Present",
    points: [
      "Build scalable systems for clients, designed to hold up as users and data grow.",
      "Focus on quality: clean, maintainable code, solid database design and reliable deployments.",
      "Work directly with clients from requirements through launch and ongoing support.",
    ],
  },
  {
    icon: BriefcaseIcon,
    kind: "Work",
    title: "Web Developer & Database Administrator",
    org: "SYD ICT Solutions — Mogadishu, Somalia",
    period: "2023 – July 2026",
    points: [
      "Designed and maintained responsive websites for clients in different sectors.",
      "Managed relational databases (MySQL, PostgreSQL, MongoDB), ensuring security and performance.",
      "Created backup systems and optimized queries for efficiency.",
      "Collaborated with teams to deliver digital solutions.",
    ],
  },
  {
    icon: GraduationCapIcon,
    kind: "Education",
    title: "Bachelor of Science in Computer Science",
    org: "SIMAD University",
    period: "Semester 8 completed · Expected 2026",
    points: [],
  },
  {
    icon: GraduationCapIcon,
    kind: "Education",
    title: "High School Diploma",
    org: "Hiigsi Primary & Secondary School — Mogadishu, Somalia",
    period: "2015 – 2022",
    points: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-surface/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="EXPERIENCE" title="Work & education" />
        </Reveal>

        <div className="relative mt-14 pl-9 sm:pl-11">
          <span className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]" />

          <div className="flex flex-col gap-10">
            {TIMELINE.map(({ icon: Icon, kind, title, org, period, points }, i) => (
              <Reveal key={title} delay={i * 120} className="relative">
                <span className="absolute -left-9 top-0 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-card text-accent shadow-soft sm:-left-11 sm:h-9 sm:w-9">
                  <Icon className="h-4 w-4" />
                </span>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent">
                      {kind}
                    </span>
                    <span className="text-xs font-medium text-muted">{period}</span>
                  </div>
                  <p className="mt-3 font-display text-lg font-bold text-ink">{title}</p>
                  <p className="mt-1 text-sm text-muted">{org}</p>

                  {points.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
