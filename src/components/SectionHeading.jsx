export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const isCenter = align === "center";
  return (
    <div className={`mx-auto max-w-2xl ${isCenter ? "text-center" : "text-left"}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold tracking-wide text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
