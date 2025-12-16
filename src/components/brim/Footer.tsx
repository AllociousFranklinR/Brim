import { Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'contact') => void;
  onProductClick?: (productId: string) => void;
}

export function Footer({ onNavigate, onProductClick }: FooterProps) {
  const phoneNumber = '+91 9445887243';
  const email = 'brimdisplay@gmail.com';

  const handleNavClick = (page: 'home' | 'contact') => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProductClick = (productId: string) => {
    if (onProductClick) {
      onProductClick(productId);
    }
  };

  return (
    <footer className="bg-[#292929] border-t border-[#B6B6B4]/20 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* OUR COMPANY */}
          <div>
            <h3 className="text-sm sm:text-base text-[#F5F5F5] mb-3 sm:mb-4 tracking-wider">
              OUR COMPANY
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-sm sm:text-base text-[#CCCCCC] hover:text-[#B6B6B4] transition-colors"
                  aria-label="Go to Home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-sm sm:text-base text-[#CCCCCC] hover:text-[#B6B6B4] transition-colors"
                  aria-label="View Products"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-sm sm:text-base text-[#CCCCCC] hover:text-[#B6B6B4] transition-colors"
                  aria-label="Contact Us"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-sm sm:text-base text-[#F5F5F5] mb-3 sm:mb-4 tracking-wider">
              PRODUCTS
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => handleProductClick('mini')}
                  className="text-sm sm:text-base text-[#CCCCCC] hover:text-[#B6B6B4] transition-colors"
                  aria-label="View Mini LED Clock"
                >
                  Mini LED Clock
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductClick('jumbo')}
                  className="text-sm sm:text-base text-[#CCCCCC] hover:text-[#B6B6B4] transition-colors"
                  aria-label="View Jumbo LED Clock"
                >
                  Jumbo LED Clock
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductClick('calendar')}
                  className="text-sm sm:text-base text-[#CCCCCC] hover:text-[#B6B6B4] transition-colors"
                  aria-label="View Calendar LED Clock"
                >
                  Calendar LED Clock
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-[#B6B6B4]/20">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 text-sm sm:text-base text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
            aria-label="Call Brim Clocks"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span>{phoneNumber}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm sm:text-base text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
            aria-label="Email Brim Clocks"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="break-all">{email}</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-[#8A8A8A]">
            © 2025 Brim Clocks. All rights reserved. | Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}