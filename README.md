# CV Generator — ATS-Friendly PDF CV Builder

> **Free. No sign-up. No watermark. Runs entirely in your browser.**

🔗 **Live app:** [goncalves95.github.io/CVAutonomation](https://goncalves95.github.io/CVAutonomation/)

---

## Why this exists

Most people don't know that **over 75% of CVs are rejected before a human ever reads them** — filtered out automatically by ATS (Applicant Tracking Systems) used by companies and recruiters.

The reasons are often invisible to the applicant: complex multi-column layouts, tables, icons embedded in the wrong way, or non-standard fonts that the software simply can't parse. The result is that great candidates get screened out, not because of their experience, but because their CV wasn't machine-readable.

I built this tool because I've been through that process myself — applying for jobs in Switzerland as a Portuguese software engineer, navigating both the cultural and technical barriers of the job market. I wanted a CV generator that produces a **clean, structured, ATS-friendly PDF** without hiding anything behind a paywall or requiring yet another account.

The tool is free and will stay free. If it helps you land an interview, [buying me a coffee](https://www.buymeacoffee.com/imfernandodev) goes a long way towards building more tools like this one.

---

## What it does

- **Fill a structured form** with all your CV sections: personal info, experience, education, certifications, skills (by category), languages with a dot rating, soft skills, awards, and online links
- **Upload and crop your photo** — drag to reposition, zoom to frame it exactly how you want inside the circular crop
- **Watch your PDF update live** — a real-time PDF preview renders in the right panel as you type
- **Download your CV as a PDF** — one click, clean A4 format, no watermark, no limits

Everything runs in the browser. Your data never leaves your device.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| PDF generation | [@react-pdf/renderer v4](https://react-pdf.org/) |
| Form management | [react-hook-form](https://react-hook-form.com/) |
| Photo cropping | [react-easy-crop](https://github.com/ValentinH/react-easy-crop) |
| Deployment | GitHub Pages via GitHub Actions |

The app is exported as a fully static site (`output: 'export'`), meaning there is no backend, no database, and no server-side processing of any kind.

---

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── generate/
│   │   └── page.tsx          # CV builder (form + live preview)
│   ├── layout.tsx            # Root layout with coffee widget
│   └── globals.css
├── components/
│   ├── cv-form.tsx           # Multi-section CV form
│   ├── pdf-download-button.tsx  # Download modal with support reminder
│   ├── photo-crop-modal.tsx  # Interactive photo crop tool
│   └── coffee-widget.tsx     # Floating support widget
└── lib/
    ├── types.ts              # CVData TypeScript types
    ├── cv-pdf.tsx            # react-pdf A4 document template
    └── default-data.ts       # Empty default form values
```

---

## CV sections supported

- Personal information (name, title, phone, email, LinkedIn, location, citizenship, work permit)
- Profile photo with interactive crop tool
- Professional summary
- Work experience (multiple entries, bullet points)
- Education
- Certifications
- Languages with visual dot rating (1–4)
- Skills organised by category
- Soft skills
- Distinctions & Awards
- Online links (GitHub, LinkedIn, Portfolio, etc.)

---

## Running locally

```bash
# Clone the repository
git clone https://github.com/Goncalves95/CVAutonomation.git
cd CVAutonomation

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production (static export)
npm run build
# Output is in the /out directory
```

---

## Deployment

The project deploys automatically to GitHub Pages on every push to `main` via the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

The GitHub Pages source must be set to **"GitHub Actions"** in the repository Settings → Pages.

---

## Privacy

This tool processes everything locally in the browser. No data is sent to any server. No analytics, no tracking, no cookies. Your CV content stays entirely on your device.

---

## Support

If this tool saved you time or helped you land an interview, consider supporting its development:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-amber?style=for-the-badge)](https://www.buymeacoffee.com/imfernandodev)

It helps me keep building free, useful tools for everyone.

---

## License

MIT — free to use, modify, and distribute.

---

*Built by [Fernando Goncalves](https://github.com/Goncalves95) — Full Stack Software Engineer based in Zurich, Switzerland.*
