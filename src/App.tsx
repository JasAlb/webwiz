import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { AmbientBackground } from './components/AmbientBackground';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { InsightsSection } from './components/InsightsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicePage } from './components/ServicePage';
import { ArticlePage } from './components/ArticlePage';
import { NotFoundPage } from './components/NotFoundPage';
import { SERVICE_PAGES_DATA, ARTICLES_DATA } from './data/seoData';

const BASE_URL = 'https://www.webwizards.world';
const DEFAULT_TITLE = 'WebWizards | Website Design & Development Agency';
const DEFAULT_DESC =
  'WebWizards creates modern websites for businesses and startups. Explore website design, custom development, e-commerce, SEO and website maintenance services.';

const SERVICE_ALIASES: Record<string, string> = {
  'website-development': 'website-development',
  'website-design': 'ui-ux-design',
  'ui-ux-design': 'ui-ux-design',
  'ecommerce-development': 'ecommerce-development',
  'seo-services': 'seo-optimization',
  'seo-optimization': 'seo-optimization',
  'website-redesign': 'website-redesign',
  'website-maintenance': 'website-maintenance',
  'web-applications': 'web-applications',
};

const SECTION_HASH_MAP: Record<string, string> = {
  '/about': '#about',
  '/services': '#services',
  '/portfolio': '#work',
  '/work': '#work',
  '/blog': '#insights',
  '/insights': '#insights',
  '/contact': '#contact',
};

export const App: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  // Sync route on popstate (Back/Forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Document Head Metadata based on Route
  useEffect(() => {
    const updateMetaTags = (title: string, description: string, canonicalUrl: string) => {
      document.title = title;

      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute('content', description);

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', title);

      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', description);

      const twUrl = document.querySelector('meta[property="twitter:url"]');
      if (twUrl) twUrl.setAttribute('content', canonicalUrl);
    };

    const rawPath = currentPath.replace(/\/$/, '') || '/';
    const cleanSlug = rawPath.replace(/^\//, '');
    const sectionHash = SECTION_HASH_MAP[rawPath];

    if (rawPath === '/' || sectionHash) {
      updateMetaTags(DEFAULT_TITLE, DEFAULT_DESC, `${BASE_URL}/`);
      if (sectionHash) {
        setTimeout(() => {
          const el = document.querySelector(sectionHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      const targetSlug = SERVICE_ALIASES[slug] || slug;
      const service = SERVICE_PAGES_DATA[targetSlug];
      if (service) {
        updateMetaTags(service.metaTitle, service.metaDescription, `${BASE_URL}/services/${targetSlug}`);
      } else {
        updateMetaTags('404: Service Not Found | WebWizards', 'The requested service was not found.', `${BASE_URL}/`);
      }
    } else if (SERVICE_ALIASES[cleanSlug]) {
      const targetSlug = SERVICE_ALIASES[cleanSlug];
      const service = SERVICE_PAGES_DATA[targetSlug];
      if (service) {
        updateMetaTags(service.metaTitle, service.metaDescription, `${BASE_URL}/services/${targetSlug}`);
      } else {
        updateMetaTags('404: Service Not Found | WebWizards', 'The requested service was not found.', `${BASE_URL}/`);
      }
    } else if (currentPath.startsWith('/insights/')) {
      const slug = currentPath.replace('/insights/', '').replace(/\/$/, '');
      const article = ARTICLES_DATA.find((a) => a.slug === slug);
      if (article) {
        updateMetaTags(article.metaTitle, article.metaDescription, `${BASE_URL}/insights/${slug}`);
      } else {
        updateMetaTags('404: Article Not Found | WebWizards', 'The requested insight article was not found.', `${BASE_URL}/`);
      }
    } else {
      updateMetaTags('404: Page Not Found | WebWizards', 'The requested page was not found.', `${BASE_URL}/`);
    }
  }, [currentPath]);

  // Master Client Navigator
  const navigate = (path: string, hash?: string) => {
    if (path.startsWith('#')) {
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/' + path);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(path);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.history.pushState({}, '', path);
        const el = document.querySelector(path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const fullPath = hash ? `${path}${hash}` : path;
    window.history.pushState({}, '', fullPath);
    setCurrentPath(path);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route Resolver
  const renderCurrentView = () => {
    const rawPath = currentPath.replace(/\/$/, '') || '/';
    const cleanSlug = rawPath.replace(/^\//, '');

    // 1. Homepage or Section Shortcuts (/about, /services, /portfolio, /blog, /contact)
    if (rawPath === '/' || SECTION_HASH_MAP[rawPath]) {
      return (
        <main className="relative z-10">
          <Hero />
          <Services onNavigateService={(slug) => navigate(`/services/${slug}`)} />
          <Portfolio />
          <About />
          <WhyUs />
          <Process />
          <InsightsSection onNavigateArticle={(slug) => navigate(`/insights/${slug}`)} />
          <FaqSection />
          <CtaSection />
          <Contact />
        </main>
      );
    }

    // 2. Service Pages: /services/:slug OR direct /website-design, /website-development, etc.
    let targetServiceSlug: string | null = null;
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      targetServiceSlug = SERVICE_ALIASES[slug] || slug;
    } else if (SERVICE_ALIASES[cleanSlug]) {
      targetServiceSlug = SERVICE_ALIASES[cleanSlug];
    }

    if (targetServiceSlug) {
      const service = SERVICE_PAGES_DATA[targetServiceSlug];
      if (service) {
        return (
          <ServicePage
            service={service}
            onBack={() => navigate('/')}
            onInquire={(serviceTitle) => {
              navigate('/', '#contact');
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent('selectService', { detail: serviceTitle }));
              }, 200);
            }}
            onOpenProject={() => {
              navigate('/', '#work');
            }}
            onNavigateService={(srvSlug) => navigate(`/services/${srvSlug}`)}
          />
        );
      }
      return <NotFoundPage onGoHome={() => navigate('/')} />;
    }

    // 3. Insight Article Pages: /insights/:slug
    if (currentPath.startsWith('/insights/')) {
      const slug = currentPath.replace('/insights/', '').replace(/\/$/, '');
      const article = ARTICLES_DATA.find((a) => a.slug === slug);

      if (article) {
        return (
          <ArticlePage
            article={article}
            onBack={() => navigate('/')}
            onNavigateService={(srvSlug) => navigate(`/services/${srvSlug}`)}
          />
        );
      }
      return <NotFoundPage onGoHome={() => navigate('/')} />;
    }

    // 4. Default 404 Fallback
    return <NotFoundPage onGoHome={() => navigate('/')} />;
  };

  const isSubpage = currentPath !== '/' && currentPath !== '';

  return (
    <div className="relative min-h-screen bg-[#08090D] text-white selection:bg-accent/30 selection:text-white overflow-x-hidden">
      {/* Cinematic Ambient Background System */}
      <AmbientBackground />

      {/* Custom Cursor System */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Entrance Loader */}
      {!loadingComplete && (
        <PageLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Sticky Glass Navbar */}
      <Navbar
        isSubpage={isSubpage}
        onNavigateHome={(hash) => navigate('/', hash)}
      />

      {/* Dynamic Route Content */}
      {renderCurrentView()}

      {/* Floating Persistent WhatsApp Chat Bubble */}
      <FloatingWhatsApp />

      {/* Footer with Directory and Routing */}
      <Footer onNavigate={(path) => navigate(path)} />
    </div>
  );
};

export default App;
