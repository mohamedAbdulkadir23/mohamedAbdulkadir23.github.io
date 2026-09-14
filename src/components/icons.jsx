const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function SunIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </svg>
  );
}

export function MoonIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z" />
    </svg>
  );
}

export function SendIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M21 3 10.5 13.5M21 3l-6.8 18-4-8.2L2 10z" />
    </svg>
  );
}

export function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function DownloadIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3v12M7 10.5 12 15.5 17 10.5" />
      <path d="M4 17.5v1.5A2 2 0 0 0 6 21h12a2 2 0 0 0 2-2v-1.5" />
    </svg>
  );
}

export function MenuIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5v6M8 7.8v.01M12 16.5v-3.7c0-1.4.9-2.3 2.1-2.3 1.2 0 1.9.9 1.9 2.3v3.7" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function CodeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9 8 4.5 12 9 16M15 8l4.5 4-4.5 4" />
    </svg>
  );
}

export function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4.5 12.5 9 17 19.5 6.5" />
    </svg>
  );
}

export function BriefcaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="7.5" width="18" height="12" rx="2.2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </svg>
  );
}

export function GraduationCapIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M2.5 9.5 12 5l9.5 4.5-9.5 4.5-9.5-4.5Z" />
      <path d="M6.5 11.6v4.2c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4.2M21.5 9.5v6" />
    </svg>
  );
}

export function FolderIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 7a2 2 0 0 1 2-2h4l2 2.3h7a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

export function HeartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 20s-7.5-4.6-9.7-9.3C.7 7 2.4 4 5.7 4c2 0 3.4 1.1 4.3 2.4C10.9 5.1 12.3 4 14.3 4c3.3 0 5 3 3.4 6.7C15.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function MapPinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21.5S5 15 5 9.8a7 7 0 0 1 14 0c0 5.2-7 11.7-7 11.7Z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </svg>
  );
}

export function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5.3 3.5h3l1.5 4-2 1.5a11.8 11.8 0 0 0 5.2 5.2l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.7 16.7 0 0 1 3.3 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function SparkleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3.5 13.4 9l5.1 1.4-5.1 1.4L12 17.3l-1.4-5.5L5.5 10.4l5.1-1.4Z" />
      <path d="M19 15.5l.6 2 2 .6-2 .6-.6 2-.6-2-2-.6 2-.6Z" />
    </svg>
  );
}

export function DatabaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </svg>
  );
}

export function LayersIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 8v10M21 8v10" />
    </svg>
  );
}

export function BrainIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9.5 4a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.6A3 3 0 0 0 7 18a3 3 0 0 0 2.5 1.5 3 3 0 0 0 0-15Z" />
      <path d="M14.5 4a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.6A3 3 0 0 1 17 18a3 3 0 0 1-2.5 1.5 3 3 0 0 1 0-15Z" />
    </svg>
  );
}

export function CalendarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="4.8" width="18" height="16" rx="2.4" />
      <path d="M3 9.8h18M8 3v3.6M16 3v3.6" />
      <path d="M7.6 13.4h2M11 13.4h2M14.4 13.4h2M7.6 16.8h2M11 16.8h2" />
    </svg>
  );
}

export function GlobeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.4 9.2h17.2M3.4 14.8h17.2" />
      <path d="M12 3c-2.3 2.4-3.5 5.4-3.5 9s1.2 6.6 3.5 9c2.3-2.4 3.5-5.4 3.5-9S14.3 5.4 12 3Z" />
    </svg>
  );
}

export function WhatsappIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 20.5l1.3-4.5A8.2 8.2 0 1 1 8 19.2l-4.5 1.3Z" />
      <path d="M9 8.4c.3 0 .5.1.6.4l.6 1.4c.1.3 0 .5-.1.7l-.5.6c-.1.2-.2.4 0 .7a6 6 0 0 0 2.6 2.3c.3.1.5 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.6 0 .8-.6 1.5-1.4 1.6-.4 0-.8 0-1.7-.3a8 8 0 0 1-4.4-4.1c-.4-.9-.4-1.4-.4-1.8a1.8 1.8 0 0 1 1.5-1.9Z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
