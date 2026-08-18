import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, SendIcon, MenuIcon, XIcon } from "./icons";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const WHATSAPP_URL = `https://wa.me/252618777691?text=${encodeURIComponent(
  "Hi Mohamed, I'd like to talk about a project."
)}`;

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-border bg-surface/80 shadow-soft"
            : "border-transparent bg-surface/40"
        }`}
      >
        <button
          onClick={() => go("home")}
          className="font-display text-lg font-extrabold tracking-tight text-ink"
        >
          MAH<span className="text-accent">.</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                active === link.id ? "text-accent" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <SunIcon className="h-4.5 w-4.5" /> : <MoonIcon className="h-4.5 w-4.5" />}
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 bg-[length:160%_100%] bg-left px-4.5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-right hover:shadow-lift sm:inline-flex"
          >
            Let's Talk
            <SendIcon className="h-4 w-4" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-ink lg:hidden"
          >
            {open ? <XIcon className="h-4.5 w-4.5" /> : <MenuIcon className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border bg-surface/95 p-3 shadow-lift backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  active === link.id ? "bg-accent-soft text-accent" : "text-muted hover:bg-canvas hover:text-ink"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-3 text-sm font-semibold text-white"
            >
              Let's Talk
              <SendIcon className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
