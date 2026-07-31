# Best Media Tool

> Download videos, images, and music from **30+ social media platforms** — fast, free, and with no account required.

**Best Media Tool** is a full-stack web application built with **Next.js 14** on the frontend and a **serverless Express.js API** deployed on AWS Lambda on the backend. It acts as a universal media downloader: paste any link, get your file.

---

## 📸 Screenshots

> *(Replace the placeholders below with actual screenshots of your app)*

| Home Page | Download Results |
| :---: | :---: |
| ![Home Page](docs/screenshots/home.png) | ![Download](docs/screenshots/download.png) |

---

## ✨ Features

- 🌐 **30+ supported platforms** — YouTube, Instagram, TikTok, Facebook, Twitter/X, Reddit, Spotify, SoundCloud, Pinterest, LinkedIn, Snapchat, Threads, Tumblr, Bilibili, Douyin, Rumble, Dailymotion, CapCut, 9GAG, Likee, Hipi, iFunny, TED, Weibo, Xiaohongshu, and more
- 🔗 **Universal link detection** — just paste any URL; the API auto-detects the platform
- 🌍 **28 languages supported** — English, Spanish, French, German, Portuguese, Italian, Chinese, Japanese, Korean, Russian, Arabic, Hindi, and more, with automatic locale detection
- 📱 **PWA ready** — installable as an app on Android devices
- ⚡ **Retry logic** — the backend retries failed requests up to 5 times automatically
- 📋 **One-click paste** — clipboard button reads your link directly from the clipboard
- 🔒 **Secure API** — backend protected by a private API key header
- 📊 **Google Analytics & AdSense** integration built-in
- 🗺️ **Auto-generated sitemap & robots.txt** for SEO
- 🤝 **Social share buttons** included

---

## 🏗️ How It Works

```
User pastes a URL
      │
      ▼
Frontend (Next.js) validates the input with Yup
      │
      ▼
Next.js Server Action calls RapidAPI (auto-download-all-in-one)
      │  ↑ up to 5 retries with 50ms delay
      ▼
Response (medias, type, thumbnail, source) is stored in localStorage (30 min TTL)
      │
      ▼
User is redirected to /download?id={uuid} and sees the download options
```

The **backend** is a separate Express.js service deployed as an **AWS Lambda function** via the Serverless Framework. It also hits the same RapidAPI endpoint but is protected by a private key, offering an alternative server-side route.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | React framework (App Router) |
| [React 18](https://react.dev/) | UI library |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styling |
| [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives (Accordion, Dialog, Popover, Select…) |
| [next-intl](https://next-intl-docs.vercel.app/) | Internationalization (28 locales) |
| [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) | Form management & validation |
| [Embla Carousel](https://www.embla-carousel.com/) | Carousel / slider component |
| [Lucide React](https://lucide.dev/) | Icon set |
| [next-pwa](https://github.com/DuCanhGH/next-pwa) | Progressive Web App support |
| [Axios](https://axios-http.com/) | HTTP client |

### Backend
| Technology | Purpose |
|---|---|
| [Express.js](https://expressjs.com/) | HTTP server |
| [Serverless Framework](https://www.serverless.com/) | AWS Lambda deployment |
| [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) | Lambda adapter |
| [RapidAPI – Auto Download All-in-One](https://rapidapi.com/dgornjakovic/api/auto-download-all-in-one-big) | Media extraction API |

---

## 📋 Requirements

Make sure you have the following installed:

- **Node.js** v18.x or higher
- **npm** (comes with Node.js)
- **Git**
- A **RapidAPI** account with access to the [Auto Download All-in-One](https://rapidapi.com/dgornjakovic/api/auto-download-all-in-one-big) API

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/diegormirhan/all-in-one-download-app.git
cd all-in-one-download-app
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory (next to `package.json`) with the following:

```env
# Your RapidAPI key for the "Auto Download All-in-One" API
RAPID_API_KEY=your_rapidapi_key_here

# Set to "true" to analyze the bundle size
ANALYZE=false
```

### 4. (Optional) Set up the backend

The backend is a separate Express.js app deployable to AWS Lambda.

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
PRIVATE_API_KEY=your_secret_key_here
RAPID_API_KEY=your_rapidapi_key_here
```

---

## 🚀 Running Locally

### Frontend (Next.js)

```bash
# From the project root
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend (Serverless Offline)

```bash
# From the /backend directory
cd backend
npm run dev
```

The backend will start locally via `serverless offline`.

---

## 🌍 Supported Languages

The app automatically detects the user's browser locale and redirects accordingly. All translations live in `messages/{locale}.json`.

| Code | Language | Code | Language |
|------|----------|------|----------|
| `en` | English | `ar` | Arabic |
| `es` | Spanish | `hi` | Hindi |
| `fr` | French | `sv` | Swedish |
| `de` | German | `no` | Norwegian |
| `pt` | Portuguese | `da` | Danish |
| `it` | Italian | `fi` | Finnish |
| `zh` | Chinese | `tr` | Turkish |
| `ja` | Japanese | `el` | Greek |
| `ko` | Korean | `pl` | Polish |
| `ru` | Russian | `he` | Hebrew |
| `nl` | Dutch | `th` | Thai |
| `id` | Indonesian | `hu` | Hungarian |
| `cs` | Czech | `ro` | Romanian |
| `uk` | Ukrainian | `vi` | Vietnamese |

---

## 📂 Project Structure

```text
all-in-one-download-app/
│
├── backend/                      # Standalone Express.js API (AWS Lambda)
│   ├── app.js                    # Express app — /api/download & /api/status routes
│   ├── lambda.js                 # AWS Lambda handler entry point
│   ├── serverless.yml            # Serverless Framework deployment config
│   └── package.json
│
├── messages/                     # i18n translation files
│   ├── en.json
│   ├── pt.json
│   └── ...                       # One JSON file per locale (28 total)
│
├── public/                       # Static assets (served as-is)
│   ├── icons/                    # App icons (PNG, WebP)
│   ├── openGraph/                # Open Graph images for social sharing
│   ├── socialMediaIcons/         # Platform icons
│   ├── socialMediaPrints/        # Platform preview images
│   ├── manifest.json             # PWA manifest
│   ├── sw.js                     # Service Worker (PWA)
│   └── ads.txt                   # Google AdSense verification
│
├── src/
│   ├── app/
│   │   ├── [locale]/             # Locale-aware pages (Next.js dynamic segment)
│   │   │   ├── layout.js         # Root layout — header, footer, GA, AdSense
│   │   │   ├── page.js           # Home page
│   │   │   ├── download/         # Results page after media extraction
│   │   │   ├── youtube/          # Platform-specific landing pages
│   │   │   ├── instagram/
│   │   │   ├── tiktok/
│   │   │   ├── facebook/
│   │   │   ├── twitter/
│   │   │   ├── reddit/
│   │   │   ├── spotify/
│   │   │   ├── pinterest/
│   │   │   ├── linkedin/
│   │   │   ├── snapchat/
│   │   │   ├── threads/
│   │   │   ├── soundcloud/
│   │   │   ├── bilibili/
│   │   │   ├── douyin/
│   │   │   ├── rumble/
│   │   │   ├── dailymotion/
│   │   │   ├── capcut/
│   │   │   ├── 9gag/
│   │   │   ├── likee/
│   │   │   ├── tumblr/
│   │   │   ├── ted/
│   │   │   ├── weibo/
│   │   │   ├── xiaohongshu/
│   │   │   ├── about/
│   │   │   ├── privacy-policy/
│   │   │   └── terms-and-conditions/
│   │   ├── api/
│   │   │   └── server.js         # Next.js Server Action — calls RapidAPI
│   │   ├── robots.js             # Auto-generated robots.txt
│   │   └── sitemap.js            # Auto-generated sitemap
│   │
│   ├── components/
│   │   ├── linkInputwithBtn.js   # Main URL input + download button (core UI)
│   │   ├── downloadCards.js      # Info cards on the home page
│   │   ├── FaqAccordion.js       # FAQ section (11 items, translated)
│   │   ├── howToUse.js           # Step-by-step guide section
│   │   ├── importantTips.js      # Tips section per platform
│   │   ├── typeWriter.js         # Animated typewriter headline
│   │   ├── translationToggle.js  # Language switcher in the header
│   │   ├── shareButtons.js       # Social share buttons
│   │   ├── carousel/             # Embla Carousel implementation
│   │   ├── menu/                 # Header and section menu components
│   │   ├── google/               # Google Analytics & AdSense components
│   │   ├── ui/                   # Radix UI-based component primitives
│   │   ├── utils/                # Utility helpers (e.g., excluded locales)
│   │   └── validationSchema.js   # Yup schema for URL input validation
│   │
│   ├── lib/
│   │   └── utils.js              # General utility functions
│   ├── config.js                 # Supported locales list
│   ├── i18n.js                   # next-intl server configuration
│   ├── middleware.js             # Locale detection & routing middleware
│   └── navigation.js             # Locale-aware Link / useRouter wrappers
│
├── .env                          # Environment variables (do not commit)
├── next.config.mjs               # Next.js config (PWA, i18n, bundle analyzer)
├── tailwind.config.js            # Tailwind CSS config
├── jsconfig.json                 # Path aliases (@/ → src/)
└── package.json                  # Frontend dependencies & scripts
```

---

## 🚢 Deployment

### Frontend

The frontend is a standard Next.js application. Deploy it to:

- **[Vercel](https://vercel.com/)** (recommended — zero config)
- **Netlify**, **Cloudflare Pages**, or any Node.js hosting

Don't forget to add your environment variables in the platform's dashboard:
- `RAPID_API_KEY`

### Backend (AWS Lambda)

```bash
cd backend
npm run deploy
```

This uses the Serverless Framework to deploy the Express app to **AWS Lambda + API Gateway** in `prod` stage with Node.js 18.x runtime.

---

## 📜 Available Scripts

### Frontend (root)

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

### Backend (`/backend`)

| Command | Description |
|---|---|
| `npm run dev` | Run locally with `serverless offline` |
| `npm run deploy` | Deploy to AWS Lambda |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an [issue](https://github.com/diegormirhan/all-in-one-download-app/issues) or submit a pull request.

---

## 📄 License

This project is licensed under the **ISC License**.

---

© 2026 Best Media Tool. All Rights Reserved.
