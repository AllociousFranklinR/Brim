import { useState, useEffect } from 'react';
import { Header } from './components/brim/Header';
import { HeroSlideshow } from './components/brim/HeroSlideshow';
import { AboutSection } from './components/brim/AboutSection';
import { ProductsSection } from './components/brim/ProductsSection';
import { Footer } from './components/brim/Footer';
import { ContactPage } from './components/brim/ContactPage';
import { WhatsAppButton } from './components/brim/WhatsAppButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  // SEO Meta Tags - World Class Optimization
  useEffect(() => {
    // Title
    document.title = 'Brim Clocks - Premium LED Digital Clocks & Display Boards | Made in India';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Brim Clocks offers premium LED Digital Clocks, LED Display Boards, Temperature & Humidity Displays, and LED Message Boards. Trusted by banks, offices & corporations with 7+ years lifespan. Made in India with 35+ years of trust.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Meta Keywords - Comprehensive SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'LED Digital Clocks, LED Display Boards, LED Production Display Boards, LED Message Display Boards, LED Temperature Display, LED Humidity Display, Digital Wall Clock, LED Calendar Clock, Mini LED Clock, Jumbo LED Clock, LED Video Wall, Full Colour LED Display Board, Ambient Air Quality Display Board, LED Pollution Display Board, Office LED Clock, Bank LED Clock, Factory LED Clock, Auditorium LED Clock, Reception LED Clock, Digital Clock India, LED Clock Chennai, Brim Clocks, LED Time Display, Temperature Humidity Display Board, Digital Display Solutions, Enterprise LED Clocks, Commercial LED Displays, Industrial LED Clocks, LED Display Systems, Made in India LED Clocks');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Author & Copyright
    const metaAuthor = document.querySelector('meta[name="author"]') || document.createElement('meta');
    metaAuthor.setAttribute('name', 'author');
    metaAuthor.setAttribute('content', 'Brim Clocks');
    if (!document.querySelector('meta[name="author"]')) {
      document.head.appendChild(metaAuthor);
    }

    const metaCopyright = document.querySelector('meta[name="copyright"]') || document.createElement('meta');
    metaCopyright.setAttribute('name', 'copyright');
    metaCopyright.setAttribute('content', 'Brim Clocks 2025');
    if (!document.querySelector('meta[name="copyright"]')) {
      document.head.appendChild(metaCopyright);
    }

    // Robots
    const metaRobots = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (!document.querySelector('meta[name="robots"]')) {
      document.head.appendChild(metaRobots);
    }

    // Viewport - Mobile Optimization
    const metaViewport = document.querySelector('meta[name="viewport"]') || document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    if (!document.querySelector('meta[name="viewport"]')) {
      document.head.appendChild(metaViewport);
    }

    // Language
    document.documentElement.setAttribute('lang', 'en');

    // Open Graph Tags - Social Media Optimization
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Brim Clocks - Premium LED Digital Clocks & Display Boards');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Enterprise-grade LED clocks with 7+ years lifespan. Trusted by banks, offices & corporations nationwide. Made in India with 35+ years of experience.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://brimclocks.com');
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://www.brimclocks.com/images/products/led_clock_product1a.jpeg');
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImage);
    }

    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'Brim Clocks');
    if (!document.querySelector('meta[property="og:site_name"]')) {
      document.head.appendChild(ogSiteName);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]') || document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    ogLocale.setAttribute('content', 'en_IN');
    if (!document.querySelector('meta[property="og:locale"]')) {
      document.head.appendChild(ogLocale);
    }

    // Twitter Card Tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', 'Brim Clocks - Premium LED Digital Clocks & Display Boards');
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Enterprise-grade LED clocks with 7+ years lifespan. Trusted by banks, offices & corporations nationwide.');
    if (!document.querySelector('meta[name="twitter:description"]')) {
      document.head.appendChild(twitterDescription);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]') || document.createElement('meta');
    twitterImage.setAttribute('name', 'twitter:image');
    twitterImage.setAttribute('content', 'https://www.brimclocks.com/images/products/led_clock_product1a.jpeg');
    if (!document.querySelector('meta[name="twitter:image"]')) {
      document.head.appendChild(twitterImage);
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://brimclocks.com');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Structured Data - JSON-LD for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Brim Clocks",
          "url": "https://brimclocks.com",
          "logo": "https://brimclocks.com/logo.png",
          "description": "Premium LED Digital Clocks and Display Board manufacturer in India",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9445887243",
            "email": "brimdisplay@gmail.com",
            "contactType": "Customer Service",
            "areaServed": "IN"
          },
          "sameAs": []
        },
        {
          "@type": "WebSite",
          "name": "Brim Clocks",
          "url": "https://brimclocks.com",
          "description": "Premium LED Digital Clocks & Display Boards",
          "publisher": {
            "@type": "Organization",
            "name": "Brim Clocks"
          }
        },
        {
          "@type": "Product",
          "name": "Mini LED Clock",
          "description": "Compact LED digital clock with glassy finish ABS case and 7+ years life",
          "brand": {
            "@type": "Brand",
            "name": "Brim Clocks"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Product",
          "name": "Jumbo LED Clock",
          "description": "Large LED clock ideal for offices, factories and auditoriums with 7+ years battery backup",
          "brand": {
            "@type": "Brand",
            "name": "Brim Clocks"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Product",
          "name": "Calendar LED Clock",
          "description": "Executive edition LED clock with date, time and temperature display",
          "brand": {
            "@type": "Brand",
            "name": "Brim Clocks"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR"
          }
        }
      ]
    };

    const scriptTag = document.querySelector('script[type="application/ld+json"]') || document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    scriptTag.textContent = JSON.stringify(structuredData);
    if (!document.querySelector('script[type="application/ld+json"]')) {
      document.head.appendChild(scriptTag);
    }

    // Theme Color for Mobile Browsers
    const themeColor = document.querySelector('meta[name="theme-color"]') || document.createElement('meta');
    themeColor.setAttribute('name', 'theme-color');
    themeColor.setAttribute('content', '#E3F2FD');
    if (!document.querySelector('meta[name="theme-color"]')) {
      document.head.appendChild(themeColor);
    }

    // Apple Mobile Web App
    const appleMobileCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]') || document.createElement('meta');
    appleMobileCapable.setAttribute('name', 'apple-mobile-web-app-capable');
    appleMobileCapable.setAttribute('content', 'yes');
    if (!document.querySelector('meta[name="apple-mobile-web-app-capable"]')) {
      document.head.appendChild(appleMobileCapable);
    }

    const appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]') || document.createElement('meta');
    appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
    appleStatusBar.setAttribute('content', 'black-translucent');
    if (!document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')) {
      document.head.appendChild(appleStatusBar);
    }
  }, []);

  const handleProductClick = (productId: string) => {
    // Navigate to home if not already there
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for the page to render before scrolling
      setTimeout(() => {
        scrollToProduct(productId);
      }, 100);
    } else {
      scrollToProduct(productId);
    }
  };

  const scrollToProduct = (productId: string) => {
    const element = document.getElementById(productId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#E3F2FD]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <HeroSlideshow />
          <AboutSection onNavigateToContact={() => setCurrentPage('contact')} />
          <ProductsSection />
          <Footer onNavigate={setCurrentPage} onProductClick={handleProductClick} />
        </>
      ) : (
        <ContactPage />
      )}
      
      <WhatsAppButton />
    </div>
  );
}