# Varnan Films - Production-Ready React SPA

A modern, responsive single-page application for Varnan Films, showcasing film production, branding, and art curation services with an integrated contact form.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **Tailwind CSS** for styling
- **ESLint + Prettier** for code quality
- Fully accessible (WCAG 2.1 compliant)
- Mobile-first responsive design

## 📦 Setup

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🖼️ Adding Images

Place the following 10 images in the `src/assets/` directory:

1. `hero.jpg` - Hero section background
2. `storyboard1.jpg` - Storyboard card 1
3. `storyboard2.jpg` - Storyboard card 2
4. `storyboard3.jpg` - Storyboard card 3
5. `reel.jpg` - Highlight reel thumbnail
6. `film.jpg` - Film production service
7. `branding.jpg` - Branding service
8. `art.jpg` - Art curation service
9. `mosaic-left.png` - Decorative corner (optional)
10. `mosaic-right.png` - Decorative corner (optional)

The app will gracefully handle missing images with placeholder fallbacks.

## 🌐 API Integration

The contact form integrates with:

**Base URL:** `https://vernanbackend.ezlab.in`

**Endpoint:** `/api/contact-us/`

**Method:** POST

**Payload:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

### Form Behavior

- **Validation:** Client-side validation for all fields (email format, phone length 7-15 digits, message min 10 chars)
- **On Success (2xx):** Message field displays "Form Submitted", form disabled for 3 seconds, then resets
- **On Error:** Inline error displayed, user input preserved
- **Timeout:** 10-second request timeout with AbortController

## 📱 Responsive Breakpoints

- **480p (≤480px):** Single column, mobile-optimized
- **720p (~768px):** Two-column layouts where appropriate
- **1080p:** Comfortable desktop experience
- **1440×823 (MacBook):** Optimized for laptop screens
- **2732×2048 (iPad landscape):** Large tablet support

## ♿ Accessibility

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management with visible focus rings
- Form validation with screen reader announcements
- Semantic HTML structure
- Target Lighthouse Accessibility score: ≥95

## 🎨 Theme Customization

Colors can be customized in `tailwind.config.js`:

```js
colors: {
  cream: '#F7EFE8',    // Background
  ink: '#1C2635',      // Primary text
  muted: '#5D6B7A',    // Secondary text
  accent: '#F26938',   // CTA buttons, accents
  accentDark: '#C44D22' // Hover states
}
```

Fonts (loaded from Google Fonts):
- **Display:** Dancing Script (cursive headlines)
- **Serif:** Playfair Display (section titles, quotes)
- **Sans:** Inter (body text, UI)

## 📂 Project Structure

```
vfilms/
├── src/
│   ├── assets/          # Images (10 files)
│   ├── components/
│   │   ├── UI/          # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── FieldError.tsx
│   │   │   └── Container.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Storyboard.tsx
│   │   ├── Metrics.tsx
│   │   ├── Reel.tsx
│   │   ├── ServiceBlock.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── api.ts       # API integration
│   │   └── validators.ts # Form validation
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css        # Global styles + Tailwind
├── public/
│   └── favicon.svg
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎯 Features

- ✅ Sticky header with smooth scroll navigation
- ✅ Hero section with script font headline
- ✅ Polaroid-style storyboard cards with tilt effects
- ✅ Sticky note metrics with rotation
- ✅ Film strip-style video/reel showcase
- ✅ Three service blocks (Film, Branding, Art) with quotes
- ✅ Fully functional contact form with API integration
- ✅ Responsive footer with contact info and social links
- ✅ Subtle texture background overlay
- ✅ Loading states and error handling
- ✅ Form success feedback with auto-reset

## 📧 Contact Information

- **Email:** vernita@varnanfilms.co.in
- **Phone:** +91 98736 84567

## 📄 License

Copyright © 2025 Varnan Films. All rights reserved.

---

Built with ❤️ using React + Vite + TypeScript + Tailwind CSS
