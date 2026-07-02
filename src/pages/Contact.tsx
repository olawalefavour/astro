import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import SectionDivider from '../components/SectionDivider';
import { photos } from '../data/photos';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full overflow-hidden">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black text-center text-foreground">
        <img
          src={photos[3].src}
          alt="Contact hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-24 sm:px-8 lg:px-10">
          <h1 className="text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Contact
          </h1>
          <SectionDivider />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Inquiries</p>
              <h2 className="mt-4 text-4xl font-semibold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Let&apos;s traverse the void together.
              </h2>
              <p className="mt-2 text-muted">Send us a message and we'll respond within 48 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.26em] text-muted">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-white/20 bg-transparent py-2 text-foreground placeholder-white/40 transition focus:border-accent focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.26em] text-muted">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-white/20 bg-transparent py-2 text-foreground placeholder-white/40 transition focus:border-accent focus:outline-none"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.26em] text-muted">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-white/20 bg-background py-2 text-foreground transition focus:border-accent focus:outline-none"
                >
                  <option value="">Select a subject...</option>
                  <option value="portfolio">Portfolio Inquiries</option>
                  <option value="prints">Print Orders</option>
                  <option value="workshop">Workshop/Collaboration</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.26em] text-muted">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-b border-white/20 bg-transparent py-2 text-foreground placeholder-white/40 transition focus:border-accent focus:outline-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-none border border-foreground/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-foreground transition hover:border-accent hover:text-accent"
                >
                  Send Transmission
                  <ArrowUpRight size={14} />
                </button>
                {submitted && <span className="text-sm text-accent">Message sent successfully!</span>}
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Location</p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                London, United Kingdom
              </h3>
              <p className="mt-1 text-sm text-muted">Available for travel worldwide</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Communication</p>
              <p className="mt-2 text-lg text-foreground">hello@astrophotography.com</p>
              <p className="mt-1 text-sm text-muted">+44 (0) 7700 000000</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Social Archive</p>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-foreground transition hover:text-accent">
                Instagram <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="space-y-3">
              <div className="relative h-[240px] w-full overflow-hidden rounded-3xl border border-white/10 bg-background/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.26em] text-muted/60">Map Placeholder</span>
                </div>
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.26em] text-muted">
                  <p>51.5074° N, 0.1278° W</p>
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.26em] text-muted">Observatory Coordinates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
