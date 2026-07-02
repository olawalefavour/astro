import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionDivider from '../components/SectionDivider';
import { photos } from '../data/photos';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    title: 'Bride, Summer 2024',
    quote: 'From the first consultation to the final reveal, every moment was handled with such care and professionalism. The photographs exceeded our expectations in every way.',
    stars: 5,
  },
  {
    name: 'James & Emma',
    title: 'Engaged Couple',
    quote: 'Our engagement session was the most relaxed, joyful experience. The photographer made us feel completely at ease, and the images are absolutely stunning.',
    stars: 5,
  },
  {
    name: 'David Chen',
    title: 'Corporate Client',
    quote: 'The headshots elevated our entire brand presence. Professional, timely, and an absolute pleasure to work with. Highly recommended.',
    stars: 5,
  },
  {
    name: 'The Wilson Family',
    title: 'Family Portraits',
    quote: 'Capturing our family at this season of life was important, and the photographer delivered genuine, beautiful images that will be treasured for years.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black text-center text-foreground">
        <img
          src={photos[2].src}
          alt="Testimonials hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-24 sm:px-8 lg:px-10">
          <h1 className="text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Testimonials
          </h1>
          <SectionDivider />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Featured Word</p>
        <blockquote className="mt-8 text-3xl font-semibold italic text-foreground sm:text-4xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          "The way they capture authentic moments is truly special. Each photograph feels like a window into genuine emotion and connection."
        </blockquote>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">— Claire Thompson, Client & Director</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {testimonials.slice(0, 2).map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 rounded-3xl border border-white/10 p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="#5EE7C7" stroke="#5EE7C7" className="text-accent" />
                ))}
              </div>
              <p className="text-lg leading-7 text-muted italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative my-16 h-[280px] overflow-hidden">
        <img
          src={photos[4].src}
          alt="Visual break - stars and stillness"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {testimonials.slice(2, 4).map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 rounded-3xl border border-white/10 p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="#5EE7C7" stroke="#5EE7C7" className="text-accent" />
                ))}
              </div>
              <p className="text-lg leading-7 text-muted italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
