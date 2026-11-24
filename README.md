# VERDANT – The Art of Fine Dining
### Ultra-Premium 3D Animated Restaurant Web Experience

[![Built with Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React 19](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_WebGL-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.14-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## ✦ Brand & Vision

**VERDANT** is an internationally acclaimed fictional luxury fine-dining brand situated on Berkeley Square, Mayfair, London. Recognized with Three Michelin Stars and the Michelin Green Star for sustainable culinary stewardship, the website delivers a cinematic, realistic, and deeply editorial dining experience.

---

## ✦ Key Features

- **Cinematic Hero Section**: Full-screen restaurant interior video atmosphere, large editorial serif headlines, Michelin Guide accolades, and interactive 3D Wagyu dish platter with mouse parallax tilt, metallic sheen physics, and inspectable ingredient hotspots.
- **Botanical Visual Identity**: Custom line-art botanical leaf and branch watermarks, centered leaf section dividers, and symmetrical botanical badges.
- **The Mayfair Sanctuary**: Botanical conservatory dining salon imagery with emerald color grading, custom curved velvet banquettes, and atmospheric candlelight.
- **Interactive Repertoire Menu**: Categorized menu grid (Starters, Main Course, Italian & Pasta, Desserts, Beverages, Chef's Specials) with high-definition culinary photography, full provenance dossiers, sommelier wine pairing notes, and direct WhatsApp ordering.
- **Gastronomic Dish Detail Modal**: Deep blur glassmorphic modal displaying preparation technique, dietary certification badges, and table booking hooks.
- **Private Dining & Table Reservations**: Dual reservation architecture featuring real-time form validation, celebratory confetti feedback, unique reservation code generation, and direct WhatsApp concierge transmission.
- **Interactive Luxury Audio Ambience**: Web Audio API oscillator synthesis generating 432Hz harmonic acoustic chords with soft volume fade.
- **Ambient Golden Particle System**: Screen-blended canvas physics simulation reacting to cursor movements with reduced-motion accessibility support.
- **Full Responsiveness**: Rigorously verified and styled across 375px (mobile), 768px (tablet portrait), 1024px (laptop), and 1440px+ (large desktop).

---

## ✦ Color System

| Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Emerald** | `#102A24` | Primary brand background & conservatory panels |
| **Forest Green** | `#1D493A` | Ambient glows & subtle card gradients |
| **Dark Green** | `#0A1915` | Contrast canvas & deep shadow backdrops |
| **Champagne Gold** | `#C8A96B` | Luxury button borders, icons, and leaf ornaments |
| **Soft Gold** | `#D8BD83` | Subtitle typography & interactive badges |
| **Warm Ivory** | `#F2EBDD` | Primary display & heading typography |
| **Muted Sage** | `#B9C5BC` | Supporting captions & secondary text |

---

## ✦ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Build**: Vite 8 + Rollup
- **Styling**: Tailwind CSS v4 + Custom Luxury Design System
- **Animation**: Framer Motion
- **3D & Particles**: Three.js + HTML5 Canvas 2D
- **Icons**: Lucide React + Bespoke Botanical Vector SVGs
- **Deployment**: GitHub Pages via GitHub Actions

---

## ✦ Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://127.0.0.1:5173/` in your browser.

4. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## ✦ Deployment to GitHub Pages

This project is pre-configured with an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

1. Create a new repository on [GitHub](https://github.com/new).
2. Link your local project:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. GitHub Actions will build and deploy the website automatically. Your site will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`
