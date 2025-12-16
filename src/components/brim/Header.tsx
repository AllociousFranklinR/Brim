import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: "home" | "contact";
  onNavigate: (page: "home" | "contact") => void;
}

export function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    page: "home" | "contact",
    section?: string,
  ) => {
    setMobileMenuOpen(false);
    onNavigate(page);

    // If navigating to home with a section, scroll to it after a brief delay
    if (page === "home" && section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000100]/95 backdrop-blur-sm border-b border-[#B6B6B4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => handleNavClick("home")}
            className="transition-opacity hover:opacity-80"
            style={{ fontFamily: "Aerial", fontWeight: "bold" }}
            aria-label="Brim Clocks Home"
          >
            <span className="text-xl sm:text-2xl text-[#B6B6B4]">
              BRIM
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => handleNavClick("home", "about")}
              className="text-sm lg:text-base text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
              aria-label="About section"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("home", "products")}
              className="text-sm lg:text-base text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
              aria-label="Products section"
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="px-4 lg:px-6 py-2 bg-[#B6B6B4] text-[#000100] rounded hover:bg-[#F5F5F5] transition-colors text-sm lg:text-base"
              aria-label="Contact page"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#B6B6B4] p-2 hover:bg-[#B6B6B4]/10 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-[#B6B6B4]/20 animate-in slide-in-from-top duration-200">
            <button
              onClick={() => handleNavClick("home", "about")}
              className="block w-full text-left text-[#F5F5F5] hover:text-[#B6B6B4] hover:bg-[#B6B6B4]/10 transition-all py-2.5 px-3 rounded-lg"
              aria-label="About section"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("home", "products")}
              className="block w-full text-left text-[#F5F5F5] hover:text-[#B6B6B4] hover:bg-[#B6B6B4]/10 transition-all py-2.5 px-3 rounded-lg"
              aria-label="Products section"
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-left px-4 py-2.5 bg-[#B6B6B4] text-[#000100] rounded-lg hover:bg-[#F5F5F5] transition-colors"
              aria-label="Contact page"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}