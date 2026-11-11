import { ServiceItem, ProjectItem, ProcessStep, WhyUsPillar } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Website Development',
    headline: 'High-performance web architecture engineered to convert.',
    shortDesc: 'Custom, responsive, high-performance websites designed around business goals.',
    detailedDesc: 'We build digital flagship flagships with clean, modern code, responsive-first architecture, and sub-second page loads. Every component is meticulously engineered for maximum reliability, speed, and conversion.',
    tags: ['Next.js / React', 'Tailwind CSS', 'TypeScript', 'Headless CMS', 'High Performance'],
    deliverables: [
      'Bespoke Front-End Architecture',
      'Content Management Integration',
      'Accessibility & Core Web Vitals Optimization',
      'Responsive Cross-Platform Perfection',
      'Interactive Micro-Animations'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Vite', 'Node.js'],
    statLabel: 'Average PageSpeed',
    statValue: '99/100',
    iconName: 'Code2',
    startingPrice: '₹24,999'
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-Commerce Development',
    headline: 'Frictionless commerce experiences that elevate brands and maximize revenue.',
    shortDesc: 'Powerful online stores that provide seamless shopping experiences.',
    detailedDesc: 'From high-ticket luxury storefronts to high-volume catalog platforms, we craft checkout-optimized e-commerce solutions that minimize cart abandonment and tell compelling product stories.',
    tags: ['Shopify Plus', 'Headless Commerce', 'Stripe Integration', 'Cart Optimization', 'Product 3D'],
    deliverables: [
      'Custom Headless Checkout Funnels',
      'Multi-Currency & Global Localization',
      'Advanced Product Filtering & Search',
      'Inventory & ERP Synchronizations',
      'Conversion Rate Optimized Layouts'
    ],
    techStack: ['Shopify', 'Hydrogen', 'Stripe', 'GraphQL', 'Tailwind', 'Redis'],
    statLabel: 'Conversion Boost',
    statValue: '+42%',
    iconName: 'ShoppingBag',
    startingPrice: '₹39,999'
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX Design',
    headline: 'Editorial visual distinction paired with intuitive, friction-free psychology.',
    shortDesc: 'Beautiful, intuitive interfaces that turn visitors into customers.',
    detailedDesc: 'We reject generic design templates. Every layout, typography scale, whitespace balance, and interactive transition is intentionally designed to reflect your brand prestige and turn passive visitors into loyal clients.',
    tags: ['Design Systems', 'Interactive Prototyping', 'User Research', 'Wireframing', 'Motion Design'],
    deliverables: [
      'Comprehensive Figma Design Systems',
      'Interactive High-Fidelity Prototypes',
      'Information Architecture & User Journeys',
      'Responsive Mobile & Tablet Viewports',
      'Brand Visual Guidelines & Asset Toolkits'
    ],
    techStack: ['Figma', 'Principle', 'Spline 3D', 'After Effects', 'Design Tokens'],
    statLabel: 'User Retention',
    statValue: '3.8x',
    iconName: 'Palette',
    startingPrice: '₹19,999'
  },
  {
    id: 'web-applications',
    number: '04',
    title: 'Web Applications',
    headline: 'Scalable SaaS platforms, custom dashboards, and web-based business engines.',
    shortDesc: 'Custom web-based platforms and business applications.',
    detailedDesc: 'We architect and build complex, enterprise-ready web platforms from scratch. Real-time data visualization, authenticated customer portals, role-based access, and robust cloud APIs that solve real operational bottlenecks.',
    tags: ['SaaS Development', 'Cloud APIs', 'Real-time Dashboards', 'Authentication', 'State Management'],
    deliverables: [
      'Full-Stack Application Development',
      'Role-Based Access & Secure Auth',
      'Real-time Analytics & Interactive Charts',
      'Scalable Database & API Architecture',
      'Automated Testing & CI/CD Pipelines'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'REST / GraphQL', 'Docker'],
    statLabel: 'Uptime Reliability',
    statValue: '99.98%',
    iconName: 'Layers',
    startingPrice: '₹49,999'
  },
  {
    id: 'seo-optimization',
    number: '05',
    title: 'SEO & Digital Optimization',
    headline: 'Dominate organic search with technical precision and lightning speed.',
    shortDesc: 'Improve discoverability, performance, and online visibility.',
    detailedDesc: 'Real SEO is engineered at the code level. We implement semantic HTML, structured JSON-LD schemas, automated sitemaps, open-graph assets, and extreme Core Web Vitals optimization to rank above your competitors.',
    tags: ['Technical SEO', 'Structured Schema', 'Core Web Vitals', 'Semantic HTML', 'Speed Audit'],
    deliverables: [
      'Deep Technical SEO & Audit Implementation',
      'JSON-LD Structured Data Hierarchy',
      'Server-Side Rendering & Meta Configurations',
      'Core Web Vitals Metric Optimization',
      'Asset Compression & Modern Image Formats'
    ],
    techStack: ['Schema.org', 'Lighthouse', 'Vercel Analytics', 'Next SEO', 'WebP / AVIF'],
    statLabel: 'Organic Reach Growth',
    statValue: '+210%',
    iconName: 'TrendingUp',
    startingPrice: '₹14,999'
  },
  {
    id: 'website-redesign',
    number: '06',
    title: 'Website Redesign',
    headline: 'Reclaim brand relevance and transform outdated assets into high-converting machines.',
    shortDesc: 'Transform outdated websites into modern digital experiences.',
    detailedDesc: 'If your existing website looks tired, loads slowly, or fails to generate qualified leads, we conduct a comprehensive teardown and rebuild it into an award-caliber digital experience that represents who you are today.',
    tags: ['Brand Evolution', 'Legacy Migration', 'UX Modernization', 'Speed Overhaul', 'Lead Engine'],
    deliverables: [
      'Comprehensive Legacy Site & UX Audit',
      'Modern Brand & Visual Identity Refresh',
      'Seamless Content & SEO Migration (Zero 404s)',
      'Modern Tech Stack Transition',
      'Conversion Architecture Redirection'
    ],
    techStack: ['Modern React', 'Tailwind', 'Cloudflare', 'TypeScript', 'Analytics'],
    statLabel: 'Lead Generation',
    statValue: '2.5x',
    iconName: 'RefreshCw',
    startingPrice: '₹19,999'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aetheria-horlogerie',
    name: 'Aetheria Haute Horlogerie',
    client: 'Aetheria Timepieces (Concept Showcase)',
    industry: 'Luxury Horology & Craftsmanship',
    year: '2026',
    services: ['Website Development', 'UI/UX Design', '3D Interactive Experience'],
    shortDescription: 'Cinematic digital flagship for an independent Swiss watch atelier, featuring interactive 360° timepiece manipulation and bespoke concierge booking.',
    fullDescription: 'Aetheria required a digital experience as refined as their mechanical complications. We engineered a dark-mode editorial flagship featuring real-time timepiece lighting simulations, smooth scroll storytelling, and a VIP private acquisition funnel.',
    challenge: 'Translating the tactile, mechanical prestige of handcrafted horology into a seamless browser experience without sacrificing load speeds or mobile responsiveness.',
    solution: 'Designed an editorial aesthetic combining typography-driven pacing with WebGL lighting, micro-animations, and a streamlined private viewing request flow.',
    deliverables: [
      'Editorial Design System & Typography Guidelines',
      'Interactive Watch Complication Showcase',
      'Private Concierge Appointment Booking Flow',
      'Multi-Language Global Ready Architecture'
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL', 'TypeScript'],
    metrics: [
      { label: 'Avg. Session Duration', value: '4m 12s' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Inquiry Conversion', value: '+34%' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    previewColor: '#8B5CF6',
    isFeatured: true,
    demoUrl: '#contact'
  },
  {
    id: 'synthetix-ai',
    name: 'Synthetix Autonomous AI',
    client: 'Synthetix Systems (Concept Showcase)',
    industry: 'Enterprise Artificial Intelligence & Cloud',
    year: '2026',
    services: ['Web Applications', 'Website Development', 'SEO Optimization'],
    shortDescription: 'Next-generation web presence and interactive analytics platform for an enterprise neural workflow engine.',
    fullDescription: 'Synthetix needed to position their bleeding-edge AI models to enterprise CTOs. We created a dark cybernetic visual system with live interactive latency graphs, code sandbox previews, and an instant enterprise sales demo scheduler.',
    challenge: 'Explaining complex generative agent architectures to enterprise buyers while preserving visual drama and effortless user navigation.',
    solution: 'Built an interactive visual telemetry interface with animated node graphs, transparent performance benchmarking, and a two-click sales pipeline integration.',
    deliverables: [
      'Cyber-Editorial UI/UX Design',
      'Interactive Live Benchmarking Engine',
      'Documentation Hub & API Sandbox',
      'Enterprise Demo Funnel with Lead Scoring'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lucide Icons'],
    metrics: [
      { label: 'Demo Requests', value: '+165%' },
      { label: 'Bounce Rate', value: '21.4%' },
      { label: 'Lighthouse Score', value: '100/100' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    previewColor: '#A78BFA',
    isFeatured: true,
    demoUrl: '#contact'
  },
  {
    id: 'kroma-architecture',
    name: 'Kroma Spatial Atelier',
    client: 'Kroma Architects (Concept Showcase)',
    industry: 'Architecture & Spatial Design',
    year: '2025',
    services: ['UI/UX Design', 'Website Development', 'Website Redesign'],
    shortDescription: 'Monolithic, minimalist digital portfolio celebrating architectural scale, raw materials, and spatial light studies.',
    fullDescription: 'Kroma wanted an editorial digital gallery where architectural photography takes center stage. We implemented asymmetric grid reveals, full-screen horizontal project transitions, and a fluid layout that feels like browsing an art monograph.',
    challenge: 'Existing legacy portfolio was sluggish, visually cluttered, and did not reflect the agency’s multimillion-dollar residential commissions.',
    solution: 'Completely overhauled the information hierarchy into an immersive editorial canvas with crisp typography, curated whitespace, and frictionless inquiry routing.',
    deliverables: [
      'Monograph-Grade Editorial Layouts',
      'Asymmetrical Scroll & Image Mask Reveals',
      'Project Blueprint & Spatial Details Viewer',
      'Client Commission Direct Channel'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    metrics: [
      { label: 'Portfolio Engagement', value: '+190%' },
      { label: 'Mobile Conversion', value: '+88%' },
      { label: 'Core Web Vitals', value: 'All Green' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    previewColor: '#C4B5FD',
    isFeatured: true,
    demoUrl: '#contact'
  },
  {
    id: 'veloce-mobility',
    name: 'Veloce Hyper-Mobility',
    client: 'Veloce Dynamics (Concept Showcase)',
    industry: 'Electric Vehicles & Clean Mobility',
    year: '2025',
    services: ['Website Development', 'E-Commerce Development', 'UI/UX Design'],
    shortDescription: 'High-octane digital launchpad and custom vehicle configurator for an ultra-luxury electric hypercar.',
    fullDescription: 'To debut their limited-edition performance roadster, Veloce needed a website that communicates aerodynamic speed and zero-emission luxury. We designed a pulse-racing interface with interactive vehicle color customization and VIP allocation reservation.',
    challenge: 'Creating a configurator experience that loads instantly on mobile devices while preserving high-fidelity visual textures and carbon-fiber finish details.',
    solution: 'Developed an optimized multi-angle layer rendering system that gives instantaneous color and rim previews with zero lag, tied directly to Stripe pre-order deposits.',
    deliverables: [
      'Live Vehicle Spec Configurator',
      'Deposit Checkout Integration',
      'Aerodynamic Wind-Tunnel Animation Flow',
      'Private Press Kit & Media Portal'
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Stripe API'],
    metrics: [
      { label: 'Pre-order Allocations', value: '100% Sold' },
      { label: 'Configurator Time', value: '3m 48s' },
      { label: 'Mobile Speed Index', value: '0.8s' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    previewColor: '#8B5CF6',
    isFeatured: false,
    demoUrl: '#contact'
  },
  {
    id: 'mirai-wealth',
    name: 'Mirai Quantitative Capital',
    client: 'Mirai Capital Group (Concept Showcase)',
    industry: 'Fintech & Family Office Wealth',
    year: '2025',
    services: ['Web Applications', 'UI/UX Design', 'SEO Optimization'],
    shortDescription: 'Encrypted client portal and institutional digital brand for a Swiss-Singapore quantitative asset manager.',
    fullDescription: 'Mirai required institutional gravitas combined with sleek modern execution. We built an austere, secure web interface with real-time portfolio performance charts, encrypted document distribution, and private client onboarding.',
    challenge: 'Balancing stringent institutional security expectations with an intuitive, modern, frictionless interface.',
    solution: 'Constructed bank-grade front-end flows with real-time interactive yield telemetry, clear fee transparency, and seamless two-factor authentication.',
    deliverables: [
      'Institutional Brand & Portal Architecture',
      'Real-Time Portfolio Yield Visualizations',
      'Secure Client Document Vault',
      'Regulatory Compliance & Privacy Safeguards'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
    metrics: [
      { label: 'Qualified Inquiries', value: '+120%' },
      { label: 'Client Portal Adoption', value: '94%' },
      { label: 'Security Grade', value: 'A+' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    previewColor: '#A78BFA',
    isFeatured: false,
    demoUrl: '#contact'
  },
  {
    id: 'verdant-botanic',
    name: 'Verdant Botanic Labs',
    client: 'Verdant Organics (Concept Showcase)',
    industry: 'Luxury D2C Skincare & Biotech',
    year: '2025',
    services: ['E-Commerce Development', 'Website Redesign', 'UI/UX Design'],
    shortDescription: 'Global direct-to-consumer flagship delivering personalized skincare routines and seamless recurring subscriptions.',
    fullDescription: 'Verdant creates clinical botanical serums. We engineered an elevated direct-to-consumer store with an interactive 60-second skin diagnostic quiz, custom ingredient breakdown tooltips, and one-click subscription management.',
    challenge: 'Educating consumers on complex botanical active compounds without overwhelming the shopping experience.',
    solution: 'Designed an interactive routine builder that diagnoses customer skin goals and generates custom product regimens with a 38% higher average order value.',
    deliverables: [
      'Interactive Skin Diagnostic Quiz Flow',
      'Subscription Recharge System',
      'Ingredient Transparency Visual Guides',
      'Seamless One-Page Checkout Funnel'
    ],
    techStack: ['Shopify Liquid / React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    metrics: [
      { label: 'Average Order Value', value: '+38%' },
      { label: 'Subscription Signups', value: '+54%' },
      { label: 'Return On Ad Spend', value: '4.2x' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    previewColor: '#C4B5FD',
    isFeatured: false,
    demoUrl: '#contact'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Strategic Alignment & Architecture',
    description: "Understand the client's business, goals, audience, and requirements. We dig into your business economics, market positioning, target customers, and competitive whitespace.",
    activities: [
      'Business model & conversion goals mapping',
      'Audience persona & user journey definition',
      'Technical requirements & scope specification',
      'Competitive landscape analysis & creative moodboarding'
    ],
    deliverable: 'Comprehensive Project Blueprint & Architecture Plan',
    duration: 'Week 1'
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Art Direction & UX Engineering',
    description: 'Create a strategic design direction and user experience. We build high-fidelity interactive wireframes, design systems, and bespoke responsive layouts.',
    activities: [
      'Editorial art direction & visual identity exploration',
      'Figma interactive component design system',
      'Mobile-first responsive wireframing & ergonomics',
      'Micro-interaction & scroll choreography storyboards'
    ],
    deliverable: 'Complete Interactive Figma Prototype & Design System',
    duration: 'Weeks 2–3'
  },
  {
    step: '03',
    title: 'Develop',
    subtitle: 'Clean Code & Performance Tuning',
    description: 'Build, optimize, and test the website. Modern React, clean TypeScript, fluid animations, and relentless optimization for sub-second speeds.',
    activities: [
      'Modular TypeScript & Tailwind component development',
      'Hardware-accelerated Framer Motion & GSAP animations',
      'Content management & backend API integrations',
      'Cross-device, accessibility, and Core Web Vitals stress tests'
    ],
    deliverable: 'Production-Ready Codebase & Staging Environment Preview',
    duration: 'Weeks 4–5'
  },
  {
    step: '04',
    title: 'Launch',
    subtitle: 'Deployment & Growth Stewardship',
    description: 'Deploy the website and provide ongoing support when required. DNS cutover, technical SEO verification, analytics tracking, and continuous evolution.',
    activities: [
      'Zero-downtime production deployment & SSL rollout',
      'Technical SEO audit, sitemaps, and robots.txt registration',
      'Conversion tracking, analytics, and CRM webhook wiring',
      'Post-launch warranty, ongoing support & performance monitoring'
    ],
    deliverable: 'Live Production Flagship + Post-Launch Care Package',
    duration: 'Week 6 & Beyond'
  }
];

export const WHY_US_PILLARS: WhyUsPillar[] = [
  {
    number: '01',
    title: 'Custom-Built Solutions',
    tagline: 'No bloated themes or generic page builders.',
    description: 'Every line of code is written specifically for your brand. We craft bespoke components that align perfectly with your business goals, offering uncompromising speed and brand distinction.',
    highlight: '100% hand-crafted architecture',
    statLabel: 'Code Weight Reduction',
    statValue: '-75%'
  },
  {
    number: '02',
    title: 'Modern Technology',
    tagline: 'Built on the bleeding edge of the web.',
    description: 'We build with React, TypeScript, Tailwind, Next.js, and modern animation engines. Your website will be fast, secure, effortlessly maintainable, and ready to scale for the next 5+ years.',
    highlight: 'React 18/19 & TypeScript native',
    statLabel: 'Technology Stack',
    statValue: 'Next-Gen'
  },
  {
    number: '03',
    title: 'Responsive-First Development',
    tagline: 'Flawless across every screen and resolution.',
    description: 'Over 60% of modern web traffic is mobile. We design and test on iPhones, Androids, tablets, laptops, and ultra-wide displays to guarantee flawless ergonomics everywhere.',
    highlight: 'Adaptive touch ergonomics',
    statLabel: 'Device Compatibility',
    statValue: '100%'
  },
  {
    number: '04',
    title: 'Performance-Focused Websites',
    tagline: 'Sub-second speeds that keep visitors engaged.',
    description: 'A 1-second delay in page load drops conversions by 7%. We obsess over asset compression, image modern formats, tree-shaking, and lazy loading to achieve 95+ Google PageSpeed scores.',
    highlight: 'Core Web Vitals green certified',
    statLabel: 'Average First Contentful Paint',
    statValue: '<0.5s'
  },
  {
    number: '05',
    title: 'Transparent Communication',
    tagline: 'Direct access to the engineers building your site.',
    description: 'No middle managers, no communication games, no surprise bills. You receive weekly video updates, staging previews, clear timelines, and direct messaging with our founding team.',
    highlight: 'Direct Slack / WhatsApp channel',
    statLabel: 'Response Guarantee',
    statValue: '<2 Hours'
  },
  {
    number: '06',
    title: 'Client-Focused Approach',
    tagline: 'Designed for commercial ROI, not just pretty pictures.',
    description: 'We don’t just create award-worthy visuals; we construct conversion funnels engineered to convert visitors into booked calls, quote requests, and paying customers.',
    highlight: 'Lead-generation psychology',
    statLabel: 'Average Client ROI',
    statValue: '3.4x'
  }
];

export const AGENCY_STATS = [
  { value: '100%', label: 'Custom Code (Zero Templates)' },
  { value: '<0.6s', label: 'Average Global Load Time' },
  { value: '99/100', label: 'Average Google PageSpeed Score' },
  { value: '24/7', label: 'High-Availability Architecture' }
];

export const BUDGET_TIERS = [
  { id: 'budget-1', label: '₹14,999 – ₹29,999', subtitle: 'Standard Website / Redesign' },
  { id: 'budget-2', label: '₹29,999 – ₹59,999', subtitle: 'Bespoke Agency Flagship' },
  { id: 'budget-3', label: '₹59,999 – ₹1,19,999', subtitle: 'E-Commerce / Custom Store' },
  { id: 'budget-4', label: '₹1,19,999+', subtitle: 'Enterprise Scale / Custom Web App' }
];
