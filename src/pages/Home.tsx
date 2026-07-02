import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { photos } from '../data/photos';

const heroPhotos = photos.slice(0, 4);
const philosophyPhotos = photos.slice(0, 4);
const galleryPhotos = photos;

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroPhotos.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const heroImage = useMemo(() => heroPhotos[activeImage], [activeImage]);

  return (
    <div className="w-full">
      <section className="relative min-h-screen w-full overflow-hidden bg-black text-foreground">
        <motion.img
          key={heroImage.id}
          src={heroImage.src}
          alt={heroImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.6 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative z-20 mx-auto flex h-full min-h-screen max-w-7xl items-center justify-center px-6 text-center sm:px-8 lg:px-10">
          <div className="w-full max-w-3xl">
            <h1 className="mx-auto max-w-3xl text-center text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl md:text-[5.5rem] lg:text-[6rem]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              ASTRO
              <br />
              PHOTOGRAPHY
            </h1>
            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-foreground/80 sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              CAPTURING THE COSMOS, ONE EXPOSURE AT A TIME
            </p>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-32"
      >
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent">My Philosophy</p>
          <div className="relative h-[420px] w-full max-w-[520px]">
            {philosophyPhotos.slice(0, 4).map((photo, index) => {
              const isLarge = index === 0;
              const classes = isLarge
                ? 'absolute left-[14%] top-[12%] h-[250px] w-[68%] rounded-sm object-cover shadow-2xl shadow-black/40'
                : 'absolute h-[140px] w-[36%] rounded-sm object-cover shadow-xl shadow-black/40';

              return (
                <img
                  key={photo.id}
                  src={photo.src}
                  alt={photo.alt}
                  className={`${classes} ${index > 0 ? 'grayscale' : ''}`}
                  style={{
                    transform: [
                      'translate(0px, 0px)',
                      'translate(16px, -18px)',
                      'translate(-12px, 18px)',
                      'translate(20px, 8px)',
                    ][index],
                    zIndex: 4 - index,
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Capturing timeless moments through striking, cinematic artistry.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted italic">
           I craft exceptional wedding and portrait photography that balances genuine emotion with a modern, elegant aesthetic—creating visual stories you will revisit for a lifetime.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            Astrophotography is part craft, part surrender. The frame is built in quiet hours, and the image arrives only after patience has been earned.
          </p>
          <Link to="/about" className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-foreground transition hover:text-accent">
            Learn More
          </Link>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Gallery</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Gallery
          </h2>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryPhotos.map((photo, index) => (
            <motion.figure
              key={photo.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className={`mb-4 overflow-hidden rounded-sm ${index % 3 === 0 ? 'break-inside-avoid' : 'break-inside-avoid'}`}
            >
              <img src={photo.src} alt={photo.alt} className="h-auto w-full object-cover transition duration-300" />
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/portfolio" className="rounded-none border border-foreground/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-foreground transition hover:border-accent hover:text-accent">
            View Portfolio
          </Link>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mt-16 overflow-hidden"
      >
        <img src={photos[6].src} alt={photos[6].alt} className="h-[420px] w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-8 lg:px-10">
          <h2 className="text-4xl font-semibold text-foreground sm:text-5xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Let&apos;s Connect
          </h2>
          <Link to="/contact" className="mt-8 rounded-none border border-foreground/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-foreground transition hover:border-accent hover:text-accent">
            Get In Touch
          </Link>
        </div>
      </motion.section>

      <div className="px-6 py-10 text-center sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">Follow Along</p>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-3 inline-block text-2xl font-semibold text-foreground transition hover:text-accent" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          @astro_photography
        </a>
      </div>
    </div>
  );
}