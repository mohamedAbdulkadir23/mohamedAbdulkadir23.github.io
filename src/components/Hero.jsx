import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  CodeIcon,
  CheckIcon,
} from "./icons";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:mcqadir90@gmail.com", icon: MailIcon },
  { label: "Portfolio source", href: "#projects", icon: CodeIcon },
];

const EXPLORING = ["AI Engineering", "Machine Learning", "Intelligent Systems", "AI-Powered Products"];

const fadeUp = (visible) =>
  `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        {/* Left column */}
        <div>
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-muted shadow-soft ${fadeUp(visible)}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            SOFTWARE ENGINEER &amp; AI ENGINEER
          </div>

          <h1
            className={`mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl ${fadeUp(visible)}`}
            style={{ transitionDelay: "80ms" }}
          >
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Mohamed
            </span>
            <br />
            Abdulkadir
          </h1>

          <p
            className={`mt-5 font-display text-xl font-semibold text-ink/90 sm:text-2xl ${fadeUp(visible)}`}
            style={{ transitionDelay: "160ms" }}
          >
            Software Engineer &amp; AI Engineer
          </p>

          <p
            className={`mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg ${fadeUp(visible)}`}
            style={{ transitionDelay: "220ms" }}
          >
            I build modern web applications, scalable databases and AI powered
            solutions that solve real world problems.
          </p>

          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row ${fadeUp(visible)}`}
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 bg-[length:160%_100%] bg-left px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-right hover:shadow-lift"
            >
              View My Work
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="/Mohamed_Abdulkadir_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div
            className={`mt-9 flex items-center gap-3 ${fadeUp(visible)}`}
            style={{ transitionDelay: "380ms" }}
          >
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right column - portrait */}
        <div
          className={`relative mx-auto w-full max-w-md transition-all duration-1000 ease-out lg:max-w-none ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          <div className="relative aspect-[6/6.2] w-full overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-accent-soft/60 via-canvas to-card shadow-lift">
            {/* soft gradient blob */}
            <div className="absolute -left-12 -top-12 h-56 w-56 rounded-full bg-accent/15 blur-3xl dark:bg-accent-2/15" />

            {/* abstract background graphics */}
            <svg
              className="absolute inset-0 h-full w-full text-accent/30 dark:text-accent-2/30"
              viewBox="0 0 400 470"
              fill="none"
            >
              <path
                d="M150 30 C 205 55, 220 115, 275 140 S 360 190, 375 250"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.55"
              />
              <path
                d="M40 230 C 75 270, 50 310, 90 345"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.35"
              />
            </svg>

            {/* wave icon */}
            <svg className="absolute left-7 top-7 h-4 w-9 text-accent/70 dark:text-accent-2/70" viewBox="0 0 36 16" fill="none">
              <path d="M1 5c2-4 5-4 7 0s5 4 7 0 5-4 7 0 5 4 7 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M1 12c2-4 5-4 7 0s5 4 7 0 5-4 7 0 5 4 7 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
            </svg>

            {/* dot grid */}
            <div className="absolute bottom-12 left-7 grid grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-accent/40 dark:bg-accent-2/40" />
              ))}
            </div>

            {/* photo, cut out, centered and flush to the bottom edge */}
            <img
              src="/portrait.png"
              alt="Portrait of Mohamed Abdulkadir"
              className="absolute bottom-0 left-1/2 h-[93%] w-auto -translate-x-1/2 drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)]"
            />
          </div>

          {/* solid accent dot on the card edge */}
          <span className="absolute right-0 top-[32%] flex h-3.5 w-3.5 translate-x-1/2 items-center justify-center">
            <span className="absolute h-full w-full animate-pulse-soft rounded-full bg-accent dark:bg-accent-2" />
            <span className="relative h-2 w-2 rounded-full bg-accent shadow-soft dark:bg-accent-2" />
          </span>

          {/* Floating card */}
          <div className="absolute -bottom-8 -right-4 w-64 animate-float rounded-2xl border border-border bg-card/90 p-5 shadow-lift backdrop-blur-md sm:-right-8 sm:w-72">
            <p className="text-sm font-bold text-ink">Currently Exploring</p>
            <ul className="mt-3.5 flex flex-col gap-2.5">
              {EXPLORING.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
