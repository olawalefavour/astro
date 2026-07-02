import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider';
import { photos } from '../data/photos';

const categories = [
  { slug: 'milky-way', label: 'Weddings', photo: photos.find((p) => p.category === 'milky-way') },
  { slug: 'deep-sky', label: 'Engagements', photo: photos.find((p) => p.category === 'deep-sky') },
  { slug: 'star-trails', label: 'Portraits', photo: photos.find((p) => p.category === 'star-trails') },
  {
    slug: 'northern-lights',
    label: 'Couples',
    photo: photos.find((p) => p.category === 'northern-lights'),
  },
];

export default function Portfolio() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black text-center text-foreground">
        <img
          src={photos[0].src}
          alt="Portfolio hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-24 sm:px-8 lg:px-10">
          <h1 className="text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Portfolio
          </h1>
          <SectionDivider />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((cat) => (
            cat.photo && (
              <Link key={cat.slug} to={`/portfolio/${cat.slug}`} className="group relative min-h-[320px] overflow-hidden rounded-3xl">
                <motion.img
                  src={cat.photo.src}
                  alt={cat.label}
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 flex items-end px-6 py-6 sm:px-8 lg:px-10">
                  <h2 className="text-4xl font-semibold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {cat.label}
                  </h2>
                </div>
              </Link>
            )
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 text-center sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Selected Stories</p>
        <h2 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Authentic Connections
        </h2>
        <p className="mt-6 text-lg text-muted">A meticulous curation of fleeting, honest moments—each frame a thoughtful celebration of light, emotion, and the profound beauty of your story.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <motion.figure
              key={photo.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="mb-4 overflow-hidden rounded-sm"
            >
              <img src={photo.src} alt={photo.alt} className="h-auto w-full object-cover transition duration-300" />
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-none border border-foreground/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-foreground transition hover:border-accent hover:text-accent">
            Load More Stories
          </button>
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center text-foreground">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Inquiries</p>
              <a href="mailto:hello@astrophotography.com" className="mt-2 text-2xl font-semibold transition hover:text-accent" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                hello@astrophotography.com
              </a>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 text-sm uppercase tracking-[0.3em] text-muted lg:items-end">
              <p className="font-semibold text-accent">Socials</p>
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
                  Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
                  Twitter
                </a>
                <a href="https://behance.com" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
