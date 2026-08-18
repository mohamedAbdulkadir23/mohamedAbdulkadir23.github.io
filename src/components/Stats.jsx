import Reveal from "./Reveal";
import { BriefcaseIcon, GraduationCapIcon, FolderIcon, HeartIcon } from "./icons";

const STATS = [
  { icon: BriefcaseIcon, value: "3+", label: "Years Experience" },
  { icon: GraduationCapIcon, value: "8", label: "Semesters Completed" },
  { icon: FolderIcon, value: "15+", label: "Projects Completed" },
  { icon: HeartIcon, value: "100%", label: "Commitment to Quality" },
];

export default function Stats() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto -mt-4 max-w-6xl rounded-3xl border border-border bg-card px-6 py-8 shadow-soft sm:px-10 sm:py-10">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-border">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className="flex flex-col items-center gap-3 text-center lg:px-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <div>
                <p className="font-display text-3xl font-extrabold text-ink">{value}</p>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
