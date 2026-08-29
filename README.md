# Local Framer Site Clone (Vedic Time System / Sure Overlay)

A complete, self-contained, offline-ready local clone of [`https://sure-overlay-120378.framer.app/`](https://sure-overlay-120378.framer.app/) with **100% animation parity**, interactive components, React / Framer Motion runtime, responsive breakpoint handlers, custom typography fonts, and high-res media.

---

## 🚀 How to Run Locally

1. **Start the local server:**
   ```bash
   cd /Users/yashraghuwanshi/.gemini/antigravity/scratch/framer-sure-overlay
   npm start
   ```
   *(or run directly with `node server.js`)*

2. **Open in your browser:**
   ```
   http://localhost:3333/
   ```
   *(If port 3333 is occupied, the server will automatically fallback to the next available port and log the URL).*

---

## 📦 What's Included

- **Full Framer Motion & Appear Animations**: All entry transitions, stagger animations, scroll-triggered reveals, transform overlays, and hover states.
- **Complete React & Rolldown Bundles**: All JS modules (`framer.mjs`, `motion.mjs`, `react.mjs`, `shared-lib.mjs`, `ZMoOpZryduHGj2ZOsMwcE1e6zLdYpw5rTbAvt5KjR-I.mjs`, `aohXcfCEH7eLshUz3Ru8hwERbjwVtxq5cCDnwgn579k.mjs`).
- **All Fonts & Typography**: `Cormorant Garamond`, `Jaini`, `Jaini Purva`, `Khand Variable`, and `Inter` hosted locally in WOFF2 format.
- **All Visual Assets & Images**: High-resolution PNGs, JPEGs, SVGs, and brand graphics.
- **Zero Remote Dependencies**: Works completely offline on `localhost`.

---

## 🛠 Project Structure

```
framer-sure-overlay/
├── public/
│   ├── index.html                           # Main entry HTML with local module links & styles
│   ├── sites/35G4mn9cJnjtKPh2pLQJOi/        # React, Framer runtime & page route bundles (.mjs)
│   ├── fonts_gstatic/                       # WOFF2 font assets
│   ├── third-party-assets/                  # Additional typography files
│   ├── images/                              # High-res graphics & background artwork
│   └── assets/                              # Brand icons & typography assets
├── server.js                                # Lightweight Node.js server with proper MIME types & fallback handling
├── package.json                             # NPM scripts configuration
└── README.md                                # Project documentation
```
