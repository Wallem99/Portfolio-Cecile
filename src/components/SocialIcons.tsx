// lucide-react no longer ships brand icons, so these are small inline SVGs.
type IconProps = { size?: number };

export function FacebookIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 11.94 2 6.36 2 1.88 6.5 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.86c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.74-1.55 1.49v1.79h2.64l-.42 2.91h-2.22v7.03c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.5 9.75h3v10.75h-3zM9.5 9.75h2.87v1.47h.04c.4-.75 1.38-1.55 2.85-1.55 3.05 0 3.61 2 3.61 4.6v6.23h-3v-5.52c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.62h-3V9.75Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12s0-3.2-.41-4.72a2.78 2.78 0 0 0-1.96-1.97C18.02 5 12 5 12 5s-6.02 0-7.63.31A2.78 2.78 0 0 0 2.41 7.28C2 8.8 2 12 2 12s0 3.2.41 4.72c.24.9.98 1.65 1.96 1.97C6 19 12 19 12 19s6.02 0 7.63-.31a2.78 2.78 0 0 0 1.96-1.97C22 15.2 22 12 22 12Zm-12 3.1V8.9L15.5 12 10 15.1Z" />
    </svg>
  );
}

export function TiktokIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 2h-3.2v13.6c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .6 0 .8.1V9.5c-.3 0-.5-.1-.8-.1-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1V8.8c1.2.9 2.7 1.4 4.3 1.4V6.9c-2.4 0-4.3-2-4.3-4.4V2z" />
    </svg>
  );
}
