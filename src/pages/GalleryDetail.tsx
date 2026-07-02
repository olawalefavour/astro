import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { photos, Photo } from '../data/photos';
import Lightbox from '../components/Lightbox';

const categoryDescriptions: Record<string, string> = {
  'milky-way': 'A celebration of love and commitment, captured in genuine moments of joy and connection.',
  'deep-sky': 'The chapter before the wedding—pure emotion, anticipation, and the beginning of forever.',
  'star-trails': 'Intimate portraits that reveal character, warmth, and the authentic essence of who you are.',
  'northern-lights': 'Two hearts, one story—couples in love, photographed with intention and intimacy.',
};

export default function GalleryDetail() {
  const { category } = useParams<{ category: string }>();
  const filteredPhotos = category ? photos.filter((p) => p.category === category) : [];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  const openLightbox = (photo: Photo) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    if (!currentPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === currentPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setCurrentPhoto(filteredPhotos[nextIndex]);
  };

  const goToPrev = () => {
    if (!currentPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === currentPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentPhoto(filteredPhotos[prevIndex]);
  };

  const categoryLabel =
    category
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') || 'Gallery';

  return (
    <div className="w-full overflow-hidden">
      <section className="mx-auto max-w-7xl space-y-4 px-6 py-16 sm:px-8 lg:px-10">
        <h1 className="text-5xl font-semibold text-foreground sm:text-6xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          {categoryLabel}
        </h1>
        <p className="max-w-2xl text-lg text-muted">{categoryDescriptions[category || ''] || 'A collection of celestial moments.'}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredPhotos.map((photo) => (
            <motion.figure
              key={photo.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="mb-4 cursor-pointer overflow-hidden rounded-sm"
              onClick={() => openLightbox(photo)}
            >
              <img src={photo.src} alt={photo.alt} className="h-auto w-full object-cover transition duration-300" />
            </motion.figure>
          ))}
        </div>
      </section>

      <Lightbox isOpen={lightboxOpen} photo={currentPhoto} photos={filteredPhotos} onClose={closeLightbox} onNext={goToNext} onPrev={goToPrev} />

      <section className="relative mt-16 overflow-hidden">
        <img src={photos[6].src} alt="CTA background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative mx-auto flex min-h-[320px] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center text-foreground sm:px-8 lg:px-10">
          <h2 className="text-4xl font-semibold sm:text-5xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Let&apos;s Connect
          </h2>
          <a href="mailto:hello@astrophotography.com" className="mt-8 inline-flex rounded-none border border-foreground/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-foreground transition hover:border-accent hover:text-accent">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
