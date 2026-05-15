# Aditya Yadav — Portfolio

Personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Design

- **Aesthetic**: Dark editorial — deep black + amber/gold accents
- **Fonts**: Syne (display) + DM Sans (body)
- **Features**: Custom cursor, marquee name, typewriter tagline, scroll-reveal animations, floating photo with spin ring, project cards, skill groups, timeline experience

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your profile image
# Copy your photo to: public/profile.jpg

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization Checklist

- [ ] Add `public/profile.jpg` (your photo from WhatsApp image)
- [ ] Update GitHub repo links in `components/Projects.tsx`
- [ ] Add actual live URLs where projects are deployed
- [ ] Update LinkedIn URL if different from `linkedin.com/in/imadityax`
- [ ] Add your resume PDF to `public/Aditya_Yadav_CV.pdf`
- [ ] Update phone number if needed in `components/Contact.tsx`

## Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (easiest)
npx vercel
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout with fonts + metadata
│   ├── page.tsx        # Home page (assembles all sections)
│   └── globals.css     # Animations, cursor, grain texture
├── components/
│   ├── Cursor.tsx      # Custom amber cursor + ring
│   ├── Navbar.tsx      # Scroll-aware nav + mobile menu
│   ├── Hero.tsx        # Marquee name, floating photo, typewriter
│   ├── About.tsx       # Bio + timeline cards
│   ├── Projects.tsx    # All 6 projects with tags + links
│   ├── Skills.tsx      # Skill groups + stats
│   ├── Experience.tsx  # Work history + certifications
│   └── Contact.tsx     # Email copy, CTAs, footer
└── public/
    └── profile.jpg     # ← ADD YOUR PHOTO HERE
```
