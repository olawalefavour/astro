import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const leftLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio', hasDropdown: true },
];

const rightLinks = [
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (to: string) => {
    if (to === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(to);
  };

  const navClass = scrolled ? 'bg-background/95 py-3 shadow-black/10' : 'bg-transparent py-6';

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b border-white/10 ${navClass}`}
      initial={false}
      animate={{ backgroundColor: scrolled ? 'rgba(10, 11, 13, 0.95)' : 'rgba(10, 11, 13, 0)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <nav className="hidden items-center gap-8 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-foreground md:flex">
          {leftLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition hover:text-accent ${isActive(link.to) ? 'text-foreground' : 'text-foreground/80'}`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
              {link.hasDropdown && <span className="ml-1 text-accent">+</span>}
            </Link>
          ))}
        </nav>

        <div className="hidden text-center md:block">
          <p className="text-sm uppercase tracking-[0.45em] text-foreground/80" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            ASTRO
          </p>
          <p className="text-sm uppercase tracking-[0.45em] text-foreground/80" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            PHOTOGRAPHY
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-foreground md:flex">
          {rightLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition hover:text-accent ${isActive(link.to) ? 'text-foreground' : 'text-foreground/80'}`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground transition hover:border-accent/60 hover:text-accent md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 md:hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex min-h-screen flex-col items-center justify-center gap-6"
            >
              {[...leftLinks, ...rightLinks].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-medium uppercase tracking-[0.25em] text-foreground transition"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
