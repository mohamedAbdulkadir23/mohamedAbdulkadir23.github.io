import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  GithubIcon,
  LinkedinIcon,
} from "./icons";

const WHATSAPP_URL = `https://wa.me/252618777691?text=${encodeURIComponent(
  "Hi Mohamed, I'd like to talk about a project."
)}`;

const DETAILS = [
  { icon: MailIcon, label: "Email", value: "mcqadir90@gmail.com", href: "mailto:mcqadir90@gmail.com" },
  { icon: PhoneIcon, label: "Phone", value: "+252 618 777 691", href: WHATSAPP_URL, external: true },
  { icon: MapPinIcon, label: "Location", value: "Nairobi, Kenya", href: null },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: LinkedinIcon },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:mcqadir90@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="CONTACT"
            title="Let's build something together"
            description="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal delay={80} className="flex flex-col gap-4">
            {DETAILS.map(({ icon: Icon, label, value, href, external }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-accent"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">{value}</p>
                  </div>
                </Wrapper>
              );
            })}

            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={160}
            as="form"
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                Name
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="rounded-xl border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 text-sm font-medium text-ink">
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="resize-none rounded-xl border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 bg-[length:160%_100%] bg-left px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-right hover:shadow-lift sm:w-auto"
            >
              Send Message
              <SendIcon className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
