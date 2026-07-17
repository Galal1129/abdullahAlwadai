import type { ReactNode } from "react";

/* Hand-drawn stroke icon set (Lucide-style, 24x24 viewBox) */
const paths: Record<string, ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="m12 3 7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  headset: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
      <path d="M19 20a3 3 0 0 1-3 3h-3" />
    </>
  ),
  searchBox: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5.5 5.5" />
      <path d="M8 10.5h5M10.5 8v5" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </>
  ),
  ship: (
    <>
      <path d="M12 10.2V14M12 2v3" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M19.4 20A11.6 11.6 0 0 0 21 14l-8.2-3.6a2 2 0 0 0-1.6 0L3 14a11.6 11.6 0 0 0 2.8 7.8" />
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 21h18" />
      <path d="M8 21v-7h8v7" />
      <path d="M8 11h8" />
    </>
  ),
  bank: (
    <>
      <path d="m3 9.5 9-5.5 9 5.5" />
      <path d="M5 10v8M9.7 10v8M14.3 10v8M19 10v8" />
      <path d="M3 21h18M3 18h18" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V7l6 4V7l6 4V7l6 4v10" />
      <path d="M2 21h20" />
      <path d="M7 16h2m3 0h2m3 0h2" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  fileCheck: (
    <>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
      <path d="M14 2v5h5" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  fileEdit: (
    <>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
      <path d="M14 2v5h5" />
      <path d="m9 16 5.5-5.5 1.5 1.5L10.5 17.5H9V16Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="15" r="5.5" />
      <path d="M9 10.5 6 3h4l2 4 2-4h4l-3 7.5" />
      <path d="m12 13 .8 1.6 1.8.25-1.3 1.25.3 1.8-1.6-.85-1.6.85.3-1.8-1.3-1.25 1.8-.25L12 13Z" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 14.6A4.5 4.5 0 0 1 21.5 19" />
    </>
  ),
  plane: (
    <>
      <path d="M10 9 5 6.5a1 1 0 0 0-1.5.9V9l4 3-4 3v1.6a1 1 0 0 0 1.5.9L10 15l6.6 3.8a1 1 0 0 0 1.5-.9V16l-5-4 5-4V6.1a1 1 0 0 0-1.5-.9L10 9Z" transform="rotate(45 12 12)" />
    </>
  ),
  truck: (
    <>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.6a1 1 0 0 0-.2-.6l-3.5-4.4a1 1 0 0 0-.8-.4H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </>
  ),
  box: (
    <>
      <path d="M11 21.7 3.5 17.4a1 1 0 0 1-.5-.9V7.5a1 1 0 0 1 .5-.9L11 2.3a2 2 0 0 1 2 0l7.5 4.3a1 1 0 0 1 .5.9v9a1 1 0 0 1-.5.9L13 21.7a2 2 0 0 1-2 0Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  boxOpen: (
    <>
      <path d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
      <path d="M2 5h20v4H2z" />
      <path d="M10 13h4" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15v-4M12 17V7M17 13v-3" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 3.6 10.8c-.6.5-1 1.2-1.1 2H9.5c-.1-.8-.5-1.5-1.1-2A6 6 0 0 1 12 3Z" />
    </>
  ),
  star: (
    <>
      <path d="m12 3 2.7 5.6 6.3.9-4.5 4.4 1 6.1L12 17.2 6.5 20l1-6.1L3 9.5l6.3-.9L12 3Z" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
      <path d="M2 9h20M9 3l3 6 3-6M12 21 9 9m6 0-3 12" />
    </>
  ),
  food: (
    <>
      <path d="M5 11h14l-1.5 9.5h-11L5 11Z" />
      <path d="m8 11 4-7 4 7" />
      <path d="M9.5 15v2.5M12 15v2.5M14.5 15v2.5" />
    </>
  ),
  cosmetics: (
    <>
      <rect x="8.5" y="11" width="7" height="9.5" rx="1.5" />
      <path d="M10.5 11V5l3.5-1.8V11" />
    </>
  ),
  shirt: (
    <>
      <path d="M8 4 3.5 7 6 10.5l2-1.2V20h8V9.3l2 1.2L20.5 7 16 4a4 4 0 0 1-8 0Z" />
    </>
  ),
  shoe: (
    <>
      <path d="M2 16v-3.5l2.5-1 3.5 1 5-5 2 2c1.5 1.5 4 2.2 5 2.3a2 2 0 0 1 2 2V16H2Z" />
      <path d="M2 19h20" />
      <path d="m9.5 11 1.5 1.5M11.5 9l1.5 1.5" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l1.5 12.5h-15L6 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  medical: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M12 11v6M9 14h6" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  gear: (
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  check: (
    <>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  chevron: (
    <>
      <path d="m9 6 6 6-6 6" />
    </>
  ),
  quote: (
    <>
      <path d="M8 6c-3 1.2-4.8 3.6-4.8 7V18h6.3v-6.3H6.2c0-2 1-3.4 2.8-4.3L8 6Z" />
      <path d="M18.5 6c-3 1.2-4.8 3.6-4.8 7V18H20v-6.3h-3.3c0-2 1-3.4 2.8-4.3L18.5 6Z" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.7,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.box}
    </svg>
  );
}
