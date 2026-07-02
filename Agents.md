# AGENTS.md — Astro Photography Portfolio Site

This file gives any AI coding agent (Copilot, Cursor, Claude, etc.) working in this repo
full context on the project so output stays consistent across sessions. Read this before
generating or editing any code.

---

## 1. Project Overview

A dark, editorial astrophotography portfolio website for photographer **Damilare Ajayi**,
built to showcase his own night-sky photography (Milky Way, deep sky objects, star trails,
northern lights) and convert visitors into inquiries (prints, bookings, collaborations).

Visual reference: Stitch-designed mockups (approved) mirroring the layout quality of
ifedayox.com, reskinned for a cosmic/space aesthetic.

**Site name:** Astro Photography
**Photographer / CEO:** Damilare Ajayi
**Pages:** Home, About, Portfolio (+ dynamic category gallery), Testimonials, Contact

---

## 2. Tech Stack

- **Build tool:** Vite
- **Framework:** React + TypeScript
- **Routing:** react-router-dom
- **Styling:** Tailwind CSS v3
- **Animation:** framer-motion
- **Icons:** lucide-react
- Do not introduce other UI/animation libraries without updating this file.

---

## 3. Design System (must stay consistent across every page)

**Colors** (define in `tailwind.config.js` theme, use tokens not raw hex in components):
- Background: `#0A0B0D` (near-black)
- Foreground: `#F2F1ED` (off-white)
- Accent: `#5EE7C7` (teal — used sparingly: labels, links, active states, focus borders)
- Muted: `#8A8D93` (secondary/gray text)

**Typography:**
- Headings: `Cormorant Garamond` (serif, elegant) — loaded via Google Fonts
- Body: `Inter` (sans-serif) — loaded via Google Fonts

**Visual language:**
- Minimal, editorial, cinematic. No cards, no icon-in-a-box clutter, no heavy borders.
- Photography is the hero — let images breathe with generous whitespace.
- Section vertical spacing: 120–160px between major sections.
- Buttons: outlined rectangular style, small uppercase text with letter-spacing, not filled/rounded.
- Hover states: subtle image zoom (scale ~1.05) with smooth transition, no drop shadows.
- Dividers: thin 1px lines, sometimes a short teal accent line under headings.

Do not deviate from this system per-page. If a new pattern is needed, add it here first.

---

## 4. Folder Structure

```
src/
  components/
    Navbar.tsx
    Footer.tsx
    HeroSlider.tsx
    ImageGrid.tsx        (masonry gallery grid, reused across Home/Portfolio/GalleryDetail)
    Lightbox.tsx          (fullscreen image viewer with prev/next, used in GalleryDetail)
    SectionLabel.tsx      (small uppercase teal label component, e.g. "MY PHILOSOPHY")
    CTASection.tsx        (reusable "Let's Connect" full-bleed CTA block)
  pages/
    Home.tsx
    About.tsx
    Portfolio.tsx
    GalleryDetail.tsx     (dynamic route: /portfolio/:category)
    Testimonials.tsx
    Contact.tsx
  data/
    photos.ts             (single source of truth for all photo data)
  assets/
    photos/                (photo1.jpeg ... photo8.jpeg live here)
  App.tsx                  (routes + shared Layout wrapper)
```

---

## 5. Data Model

All photos are managed from one file: `src/data/photos.ts`

```ts
export interface Photo {
  id: string;
  src: string;                 // imported from ../assets/photos/photoN.jpeg
  category: 'milky-way' | 'deep-sky' | 'star-trails' | 'northern-lights';
  alt: string;
  location?: string;
  exposure?: string;
  iso?: string;
}

export const photos: Photo[] = [ /* photo1.jpeg – photo8.jpeg, 2 per category */ ];
```

**Image file convention:** `photo1.jpeg` through `photo8.jpeg` (JPEG, not JPG — file
extensions must match exactly, case-sensitive on some deploy targets).

As Damilare adds more shots, just drop new `photoN.jpeg` files into `src/assets/photos/`
and add matching entries to `photos.ts`. No component code should ever hardcode a photo
count — always map/filter over the `photos` array.

---

## 6. Routes

| Route                  | Page             | Notes                                      |
|-------------------------|------------------|---------------------------------------------|
| `/`                     | Home             | Hero slideshow uses all photos              |
| `/about`                | About            | Bio, approach, gear list                    |
| `/portfolio`            | Portfolio        | Category tiles + full gallery grid          |
| `/portfolio/:category`  | GalleryDetail    | Filtered by category slug + lightbox        |
| `/testimonials`         | Testimonials     | Static placeholder quotes (editable)        |
| `/contact`              | Contact          | Client-side only form (no backend yet)      |

All routes render inside a shared `Layout` (`Navbar` + `<Outlet/>` + `Footer`).

---

## 7. Content Conventions

- **Placeholder copy** (bio paragraphs, testimonials, gear specs) should read as genuine,
  first-person, and specific — never lorem ipsum, never generic corporate tone. It must be
  clearly editable — Damilare will replace bio/testimonial content with his real story before
  launch. Flag any placeholder block with a `{/* PLACEHOLDER — replace before launch */}`
  comment in the code.
- Category names are fixed: **Milky Way, Deep Sky Objects, Star Trails, Northern Lights**.
  Don't rename these without updating `photos.ts` category types.
- Contact form is front-end only for now: on submit, `console.log` the form state and show
  a success message. No backend/email service wired up yet — flag this clearly if you touch
  the Contact page so we know to swap it for a real handler later (e.g. Formspree, Resend).

---

## 8. Build Order (do not skip ahead / do not batch multiple pages in one pass)

1. Project scaffold + Tailwind theme + `photos.ts` data model
2. Navbar + Footer (shared across all pages)
3. Home page
4. About page
5. Portfolio page + GalleryDetail + Lightbox
6. Testimonials page
7. Contact page

Test and visually verify each step before moving to the next. If a step breaks the shared
design system (colors, spacing, fonts), fix it before proceeding — don't let drift compound.

---

## 9. Known TODOs / Not Yet Implemented

- [ ] Real bio copy for Damilare Ajayi (About page)
- [ ] Real testimonial quotes (currently placeholder names/quotes)
- [ ] Real contact details (email, location, phone)
- [ ] Contact form backend (currently console.log only)
- [ ] Instagram / social links (currently placeholder hrefs)
- [ ] More than 8 photos as Damilare's library grows — categories may become uneven
      (currently assumes ~2 photos per category minimum)