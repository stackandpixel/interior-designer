# AURA Spaces Studio — Premium Interior Design Website

> **Tagline:** Thoughtfully Designed. Beautifully Lived.  
> **Location:** Baner, Pune, Maharashtra, India  
> **Specialization:** Residential High-Rise Apartments, Country Villas, Modular Kitchens, and Boutique Commercial Workspaces.

---

## 1. Architectural Overview & Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 with custom architectural tokens (`studio-ivory`, `studio-sand`, `studio-walnut`, `studio-brass`, `studio-sage`)
- **Typography:** Editorial Serif (*Cormorant Garamond* / *Playfair Display*) paired with Geometric Clean Sans (*Plus Jakarta Sans*)
- **Icons:** Lucide React
- **Routing:** React Router v7 (`react-router-dom`) with automatic `ScrollToTop` handling
- **Zero-Backend Architecture:** Instant WhatsApp click-to-chat dispatch (`wa.me/919876543210?text=...`) for qualified lead generation without requiring database or server overhead.

---

## 2. Centralized Configuration

All studio details, phone numbers, WhatsApp dispatch parameters, address, social media links, and indicative budget ranges are centralized in a single file:

```
src/config/studioConfig.ts
```

To customize the website for a paying studio or production deployment, update:
- `brandName`, `tagline`, and `shortName`
- `location.fullAddress`, `location.landmark`, and `location.serviceCities`
- `contact.phoneDisplay` and `contact.whatsappNumber` (country code + 10 digits without symbols, e.g. `919822012345`)
- `contact.email` and `contact.workingHours`
- `social.instagram` and `social.instagramHandle`

---

## 3. Local Development & Build

### Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server (runs on port 3000)
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production

```bash
npm run build
```

This generates an optimized static production bundle in the `dist/` directory.

### Previewing the Production Build

```bash
npm run preview
```

---

## 4. Deployment Guides

Because AURA Spaces Studio is engineered as a high-performance static SPA, it can be deployed to any modern static hosting service for free or at minimal cost:

### A. Deploy to Vercel

1. Install the Vercel CLI: `npm i -g vercel` (or connect your GitHub repository directly on [vercel.com](https://vercel.com)).
2. If deploying via the web dashboard:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. For single-page app client routing on Vercel, ensure a `vercel.json` exists with rewrites:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

### B. Deploy to Cloudflare Pages

1. In the Cloudflare Dashboard, navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Build configurations:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
3. For SPA fallback on Cloudflare Pages, create a `public/_redirects` file with:
   ```text
   /*    /index.html   200
   ```

### C. Deploy to GitHub Pages

1. In `vite.config.ts`, ensure `base: './'` or your repo name `base: '/repo-name/'`.
2. Use the official `gh-pages` package or a GitHub Action to deploy the `dist/` folder.

### D. Connecting a Custom Domain

1. In your domain registrar (GoDaddy, Namecheap, Google Domains, Cloudflare):
   - Add a `CNAME` record pointing `www` to your host (e.g. `cname.vercel-dns.com`).
   - Add an `A` record pointing `@` to your host's designated IP addresses.
2. In your hosting platform settings (Vercel/Cloudflare), enter your domain name (e.g., `auraspacesstudio.com`). SSL certificates will provision automatically.

---

## 5. WhatsApp Click-to-Chat Integration Details

The consultation and enquiry forms utilize the official WhatsApp Business protocol:

```
https://wa.me/919876543210?text=ENCODED_MESSAGE
```

- **Zero-Maintenance:** No server required, zero database risk, and immune to email spam filters.
- **Pre-filled Consultation Brief:** The form captures property type (1BHK, 2BHK, 3BHK, Villa, Office), carpet area, location, budget range, and current possession stage, formatting it neatly so the architect receives a structured brief.
- **Direct Engagement:** Immediately starts a conversation in WhatsApp Web or the WhatsApp mobile app.

*Note:* If persistent storage, CRM webhooks (e.g. HubSpot, Notion, Google Sheets), or automated email notifications are needed later, connect an API route (e.g., via Express, Zapier webhook, or Firebase).

---

## 6. Pre-Production Checklist (Content Replacement)

Before publishing for a real client or studio, replace the following sample placeholders:

| Item | Location | Required Replacement |
| :--- | :--- | :--- |
| **Studio Phone & WhatsApp** | `src/config/studioConfig.ts` | Replace `+91 98765 43210` and `919876543210` with verified studio numbers |
| **Studio Address** | `src/config/studioConfig.ts` | Replace placeholder Baner address with actual studio location |
| **Instagram Handle** | `src/config/studioConfig.ts` | Replace `@auraspaces.studio` with real profile handle |
| **Team Profiles** | `src/data/teamData.ts` | Update team members, names, roles, and real photography |
| **Client Testimonials** | `src/data/testimonialsData.ts` | Replace fictional sample feedback with verified client reviews and photos |
| **Project Photography** | `public/images/projects/` | Replace vector architectural concept graphics with real high-resolution project photography |
| **Pricing Ranges** | `src/config/studioConfig.ts` | Adjust indicative budget slabs based on studio target market |

---

## 7. Quality & Testing Checklist

- [x] **Top Bar Contract Verified:** Single-line brand wordmark, clean text nav links, 1 primary CTA button, mobile drawer.
- [x] **Zero-Pill Metadata Discipline:** No decorative badge sandwiches; clean unboxed metadata with `·` separators.
- [x] **Anti-Slop Restraint:** No mechanical comments (`//`), no fake system statuses, no low-opacity watermarks, no decorative green pulsing dots.
- [x] **Full 6 Conceptual Projects:** 3BHK Pune, Minimalist Mumbai, Modular Kitchen Pune, Master Bedroom Thane, Country Villa Pawna, and Creative Workspace Pune.
- [x] **Interactive Before & After Section:** Touch- and mouse-friendly draggable comparison slider with fallback side-by-side view.
- [x] **Accessible Lightbox:** Fullscreen modal with ESC key and arrow key navigation.
- [x] **Form Validation:** Validates required fields and constructs encoded WhatsApp message.
- [x] **Zero Broken Images:** `ImageWithFallback` handles loading states and provides graceful architectural fallback containers.
- [x] **Indian Market Focus:** BHK options, ₹ budgets, IS 710 marine ply standards, and Pune/Mumbai context.
