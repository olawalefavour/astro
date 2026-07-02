import { ArrowUpRight, Aperture, Compass, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider';

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black text-center text-foreground">
        <img
          src="/src/assets/photos/photo3.jpeg"
          alt="Starry mountain scene"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-24 sm:px-8 lg:px-10">
          <h1 className="text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            About
          </h1>
          <SectionDivider />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-6 text-center text-sm uppercase tracking-[0.3em] text-muted sm:grid-cols-3 sm:text-left">
          {[
            { label: 'Instagram', href: 'https://instagram.com', icon: ArrowUpRight },
            { label: 'Email', href: 'mailto:hello@astrophotography.com', icon: Mail },
            { label: 'Gallery', href: '/portfolio', icon: Aperture },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-center gap-2 transition hover:text-accent sm:justify-start"
              target={item.label === 'Gallery' ? '_self' : '_blank'}
              rel={item.label === 'Gallery' ? undefined : 'noreferrer'}
            >
              <item.icon size={14} />
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/src/assets/photos/photo4.jpeg"
              alt="Photographer at work under stars"
              className="h-full w-full object-cover grayscale"
            />
          </div>

          <div className="space-y-6 text-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Hi, I'm Damilare Ajayi.</p>
            <div className="space-y-5 text-lg leading-8 text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>
                I am a portrait and wedding photographer based in London, crafting authentic and elegant visual stories for those who value meaningful storytelling.
              </p>
              <p>
                With a quiet and deliberate approach, I let moments happen naturally, keeping my focus on the interplay of light and genuine emotion. From intimate city elopements to grand, multi-day celebrations, I am here to document your moments beautifully, truthfully, and without distraction.
              </p>
              <p>
                <strong>Get in touch to preserve your moments.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 text-foreground sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          {[
            {
              icon: Compass,
              title: 'Thoughtful Curation',
              description: 'Seamlessly planning timelines and locations to capture your day effortlessly.',
            },
            {
              icon: Aperture,
              title: 'Intentional Direction',
              description: 'A calm, unobtrusive presence that allows genuine, raw emotion to unfold naturally.',
            },
            {
              icon: Sparkles,
              title: 'Refined Post-Processing',
              description: 'Subtle, timeless editing that preserves the true elegance and colors of your celebration.',
            },
          ].map((item) => (
            <div key={item.title} className="space-y-4 rounded-3xl border border-white/10 px-6 py-8 text-center text-sm text-muted">
              <item.icon size={24} className="mx-auto text-accent" />
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Technical Arsenal</p>
        <h2 className="mt-4 text-4xl font-semibold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          The Tools of Observation
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-white/10 p-8">
            {[
              { label: 'Camera Bodies', value: 'Sony A7R V (Astro-modified) / Nikon Z9' },
              { label: 'Primary Lenses', value: '14-24mm f/2.8 GM / 35mm f/1.4 Art' },
              { label: 'Star Trackers', value: 'Sky-Watcher Star Adventurer GTi' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-[0.26em] text-muted">{item.label}</span>
                <span className="max-w-[65%] text-right text-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 p-8">
            {[
              { label: 'Filtration', value: 'Hoya Red Intensifier / Kase Night Focus' },
              { label: 'Support', value: 'Really Right Stuff TVC-34L Tripod' },
              { label: 'Software', value: 'PixInsight / Adobe Lightroom / Starry Landscape Stacker' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-[0.26em] text-muted">{item.label}</span>
                <span className="max-w-[65%] text-right text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden">
        <img src="/src/assets/photos/photo7.jpeg" alt="Aurora background CTA" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative mx-auto flex min-h-[320px] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center text-foreground sm:px-8 lg:px-10">
          <h2 className="text-4xl font-semibold sm:text-5xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Let&apos;s Connect
          </h2>
          <Link to="/contact" className="mt-8 inline-flex rounded-none border border-foreground/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-foreground transition hover:border-accent hover:text-accent">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
