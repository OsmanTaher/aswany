
export type Project = {
  slug?: string;
  title: string;
  image: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
};




export const projects = [
  {
    slug: "docstudy",
    title: "Next 13 Doc Study",
    image: "/project/project.png",
    description: "An interactive learning hub designed to explore and practice Next.js 13 features with hands-on examples.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "#",
    // githubUrl: "#"
  },
  {
    slug: "ecommerce-hub",
    title: "E-Commerce Storefront",
    image: "/project/project.png",
    description: "A full-featured online storefront with a real-time shopping cart, secure checkout, and product management.",
    stack: ["React", "Next.js", "Redux Toolkit", "Stripe", "Tailwind CSS"],
    // liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "task-flow",
    title: "TaskFlow Kanban",
    image: "/project/project.png",
    description: "A streamlined task management tool featuring smooth drag-and-drop boards inspired by Trello workflows.",
    stack: ["TypeScript", "React", "Dnd Kit", "Tailwind CSS", "Zustand"],
    // liveUrl: "#",
    // githubUrl: "#"
  },
  {
    slug: "dev-pulse-blog",
    title: "DevPulse Tech Blog",
    image: "/project/project.png",
    description: "A developer-first blogging platform supporting MDX content, syntax highlighting, and live commenting.",
    stack: ["Next.js", "Contentlayer", "MDX", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "chat-sync",
    title: "ChatSync Messenger",
    image: "/project/project.png",
    description: "A real-time messaging application featuring public rooms, direct chats, and live typing indicators.",
    stack: ["Node.js", "Socket.io", "React", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "weather-sphere",
    title: "WeatherSphere Dashboard",
    image: "/project/project.png",
    description: "A clean weather intelligence dashboard providing accurate geolocation forecasts and interactive heatmaps.",
    stack: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "code-craft-ai",
    title: "CodeCraft AI Assistant",
    image: "/project/project.png",
    description: "An AI-powered coding companion that analyzes snippets, detects bugs, and suggests performance fixes.",
    stack: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "job-huntly",
    title: "JobHuntly Portal",
    image: "/project/project.png",
    description: "A niche developer job board featuring remote position filters, saved listings, and one-click applications.",
    stack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Supabase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "crypto-glance",
    title: "CryptoGlance Tracker",
    image: "/project/project.png",
    description: "A real-time cryptocurrency monitor delivering live price changes, market metrics, and dynamic charts.",
    stack: ["React", "Chart.js", "CoinGecko API", "Material UI"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "recipe-nest",
    title: "RecipeNest Kitchen",
    image: "/project/project.png",
    description: "A smart recipe finder that recommends delicious meal ideas based on the ingredients in your fridge.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "fit-track-pro",
    title: "FitTrack Pro",
    image: "/project/project.png",
    description: "A daily workout and nutrition companion with visual progress tracking and personalized routine logging.",
    stack: ["React Native", "Expo", "TypeScript", "Node.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "quiz-master",
    title: "QuizMaster Battle",
    image: "/project/project.png",
    description: "A competitive multiplayer trivia platform featuring timed questions and global live leaderboards.",
    stack: ["React", "Firebase Realtime DB", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "link-snip",
    title: "LinkSnip URL Shortener",
    image: "/project/project.png",
    description: "A lightweight link shortener with detailed click analytics, geographic breakdowns, and custom aliases.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "invoice-hero",
    title: "InvoiceHero Generator",
    image: "/project/project.png",
    description: "A fast billing toolkit to generate, customize, and export professional PDF invoices with client records.",
    stack: ["React", "TypeScript", "jsPDF", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "notion-lite",
    title: "NotionLite Workspace",
    image: "/project/project.png",
    description: "A minimalist block-based document editor supporting nested hierarchies and instant autosave.",
    stack: ["Next.js", "Tiptap", "Tailwind CSS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "media-vault",
    title: "MediaVault Cloud",
    image: "/project/project.png",
    description: "A secure cloud storage manager for uploading, categorizing, and sharing media via encrypted links.",
    stack: ["React", "Node.js", "Express", "AWS S3", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "music-wave",
    title: "MusicWave Stream",
    image: "/project/project.png",
    description: "A browser-based audio player with custom playlist creation, instant search, and visual equalizer bars.",
    stack: ["React", "Web Audio API", "Tailwind CSS", "Zustand"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "book-shelf",
    title: "BookShelf Digital Library",
    image: "/project/project.png",
    description: "A reading catalog application to log annual challenges, track book status, and publish short reviews.",
    stack: ["Next.js", "Google Books API", "Prisma", "SQLite"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "pixel-studio",
    title: "PixelStudio Canvas",
    image: "/project/project.png",
    description: "A browser-native pixel drawing canvas complete with multi-layer tools, palette swaps, and GIF export.",
    stack: ["HTML5 Canvas", "JavaScript", "CSS3"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "event-radar",
    title: "EventRadar Platform",
    image: "/project/project.png",
    description: "A discovery engine for local community meetups, tech conferences, and online ticket checkout.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "snippet-box",
    title: "SnippetBox Manager",
    image: "/project/project.png",
    description: "A personal code snippet vault with multi-language tagging, instant search, and code copying.",
    stack: ["Vue.js", "Tailwind CSS", "Monaco Editor", "Supabase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "habit-grid",
    title: "HabitGrid Tracker",
    image: "/project/project.png",
    description: "A daily habit tracker styled after GitHub contribution heatmaps to encourage unbroken streaks.",
    stack: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "crowd-fund-me",
    title: "CrowdFund Platform",
    image: "/project/project.png",
    description: "A transparent fundraising platform allowing campaign creation, milestone updates, and pledge tracking.",
    stack: ["Next.js", "Solidity", "Ethers.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "prompt-shelf",
    title: "PromptShelf Library",
    image: "/project/project.png",
    description: "A community directory to curate, test, and share effective prompts for modern generative AI models.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "gym-sync",
    title: "GymSync Management",
    image: "/project/project.png",
    description: "An operational dashboard for fitness centers to manage memberships, check-ins, and trainer schedules.",
    stack: ["Angular", "TypeScript", "Bootstrap", "Node.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "speed-type",
    title: "SpeedType Challenge",
    image: "/project/project.png",
    description: "A minimal typing test app evaluating words per minute, accuracy rates, and error patterns in real time.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "feed-craft",
    title: "FeedCraft RSS Reader",
    image: "/project/project.png",
    description: "A distraction-free RSS aggregator delivering streamlined news and blog feeds without clutter.",
    stack: ["SvelteKit", "Tailwind CSS", "SQLite"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "api-monitor",
    title: "APIMonitor Uptime",
    image: "/project/project.png",
    description: "An automated endpoint health monitor sending instant webhook alerts on downtime and latency spikes.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "portfolio-lite",
    title: "Portfolio Minimalist",
    image: "/project/project.png",
    description: "A modern, high-performance portfolio template crafted for software developers seeking a clean layout.",
    stack: ["Astro", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "cloud-canvas",
    title: "CloudCanvas Whiteboard",
    image: "/project/project.png",
    description: "A collaborative real-time digital whiteboard for distributed teams sketching diagrams and ideas.",
    stack: ["React", "Canvas API", "WebRTC", "Socket.io", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
];