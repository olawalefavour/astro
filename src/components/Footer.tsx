import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-12 text-center sm:px-8 lg:px-10">
        <h2 className="text-4xl font-semibold tracking-[0.04em] text-foreground sm:text-5xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Let&apos;s Connect
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted sm:gap-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <Instagram size={16} />
            <span>Instagram</span>
          </a>
          <a href="mailto:hello@astrophotography.com" className="flex items-center gap-2 transition hover:text-accent">
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.72rem] uppercase tracking-[0.24em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 astro photography. All Rights Reserved.</p>
          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <a href="#" className="transition hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
