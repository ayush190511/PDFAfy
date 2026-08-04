# PDFAfy (pdfafy.com)

> Minimalist, hyper-fast, ISO-compliant PDF → PDF/A converter inspired by Vercel, Linear, and Stripe design principles.

![PDFAfy Banner](public/favicon.svg)

## 🚀 Key Features

- **Single-Purpose Efficiency**: 100% focused on converting PDF documents to ISO 19005 compliant PDF/A files.
- **Multiple ISO Standards**: Convert to **PDF/A-1b**, **PDF/A-2b**, or **PDF/A-3b** with interactive standard pickers and explanations.
- **Client-Side Privacy Architecture**: Conversions execute inside the browser's local memory—zero documents saved to cloud servers.
- **Drag & Drop Upload Studio**: Supports large PDF files up to 150MB with instant compliance verification badges.
- **Vercel & Linear Aesthetics**: Styled with Geist & Inter fonts, hairline borders, soft hover lifts, and zero visual clutter.
- **Complete SEO Suite**: Automated sitemap, robots.txt, canonical links, OpenGraph cards, and rich JSON-LD Schemas (SoftwareApplication, FAQPage, BreadcrumbList).
- **Astro Content Collections Blog**: Includes 7 technical articles covering PDF vs PDF/A, ISO sub-standards, government mandates, and long-term archiving best practices.

---

## 🛠️ Technology Stack

- **Framework**: [Astro v5](https://astro.build/) (Static Site Generation + React Islands)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Vercel design system tokens (`global.css`)
- **PDF Engine**: [pdf-lib](https://pdf-lib.js.org/) for ISO XMP metadata packet injection & sRGB OutputIntent configuration
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: 100% TypeScript

---

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or 20.x+
- npm or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/your-repo/pdfafy.git
cd pdfafy

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`.

---

## 🚀 Building for Production

```bash
# Type check and build static SSG output
npm run build

# Preview production build locally
npm run preview
```

---

## 🐳 Docker Deployment

```bash
# Build production multi-stage image
docker build -t pdfafy:latest .

# Run Nginx container on port 80
docker run -d -p 80:80 pdfafy:latest
```

---

## 📄 License

MIT © PDFAfy (pdfafy.com)
