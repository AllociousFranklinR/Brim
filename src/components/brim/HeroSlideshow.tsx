import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const products = [
  {
    name: "Mini LED Clock",
    image:
      "https://www.brimclocks.com/images/products/led_clock_product1a.jpeg",
  },
  {
    name: "Jumbo LED Clock",
    image:
      "https://www.brimclocks.com/images/products/led_clock_product2a.jpeg",
  },
  {
    name: "Calendar Clock",
    image:
      "https://www.brimclocks.com/images/products/led_clock_product3a.jpeg",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60vh] min-h-[400px] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] mt-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#E3F2FD] z-10" />
          <img
            src={products[currentSlide].image}
            alt={`${products[currentSlide].name} - Premium LED Digital Clock by Brim Clocks`}
            className="w-full h-full object-cover"
            loading="eager"
          />

          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
            <div className="max-w-7xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#F5F5F5] mb-2 sm:mb-3 md:mb-4"
              >
                Premium LED Clock Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white"
              >
                Trusted by Banks, Offices & Corporations
                Nationwide
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-6 sm:w-8"
                : "bg-white/40 hover:bg-white/60 w-2 sm:w-3"
            }`}
            aria-label={`View ${products[index].name}`}
          />
        ))}
      </div>
    </div>
  );
}