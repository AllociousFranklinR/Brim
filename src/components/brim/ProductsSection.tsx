import { motion } from "motion/react";
import { Battery, Calendar, Maximize2 } from "lucide-react";
import { useState, useEffect } from "react";

const products = [
  {
    id: "mini",
    name: "Mini LED Clock",
    icon: Battery,
    features: [
      "Glassy Finish ABS Case",
      "7+ Years Life",
      "Built-in battery backup for 5+ years",
    ],
    size: "Compact size: 14 cm (L) x 6.5 cm (H) x 3.5 cm (W)",
    scale: "small",
    images: [
      "https://www.brimclocks.com/images/products/led_clock_product1a.jpeg",
      "https://www.brimclocks.com/images/products/led_clock_product1b.jpeg",
    ],
  },
  {
    id: "jumbo",
    name: "Jumbo LED Clock",
    icon: Maximize2,
    features: [
      "Ideal for Offices, Factories & Auditoriums",
      "Built-in battery backup for 7+ years",
      "High visibility from distance",
    ],
    size: "Large size: 90 cm (L) x 30 cm (H)",
    scale: "large",
    images: [
      "https://www.brimclocks.com/images/products/led_clock_product2a.jpeg",
      "https://www.brimclocks.com/images/products/led_clock_product2c.jpeg",
    ],
  },
  {
    id: "calendar",
    name: "Calendar Clock",
    icon: Calendar,
    features: [
      "Executive / Reception Edition",
      "Wall mountable / table top use",
      "Date, time & temperature display",
    ],
    size: "Compact size: 26 cm (L) x 8 cm (H)",
    scale: "small",
    images: [
      "https://www.brimclocks.com/images/products/led_clock_product3a.jpeg",
      "https://www.brimclocks.com/images/products/led_clock_product3c.jpeg",
      "https://www.brimclocks.com/images/products/led_clock_product3b.jpeg",
    ],
  },
];

function ProductImageSlideshow({
  images,
}: {
  images: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-64 overflow-hidden bg-[#000100]">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Product image ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentIndex === index ? 0.8 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{
            pointerEvents:
              currentIndex === index ? "auto" : "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity =
              currentIndex === index ? "0.8" : "0";
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      ))}

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-[#B6B6B4] w-6"
                : "bg-[#B6B6B4]/40"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProductsSection() {
  const handleEnquire = (productName: string) => {
    const whatsappNumber = "919445887243";
    const message = `Can you tell me more about this? ${productName}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section
      id="products"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#000100]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#B6B6B4] mb-3 sm:mb-4 px-2">
            Our Premium Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8A8A8A] px-2">
            Enterprise-grade LED clocks for every need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                }}
                className={`bg-[#292929] rounded-lg overflow-hidden border border-[#B6B6B4]/20 hover:border-[#B6B6B4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#B6B6B4]/10 flex flex-col ${
                  product.scale === "large"
                    ? "lg:scale-105"
                    : ""
                }`}
              >
                {/* Product Image */}
                <div className="relative">
                  <ProductImageSlideshow
                    images={product.images}
                  />
                  {/* Icon Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#B6B6B4] p-2 sm:p-3 rounded-full z-10">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#000100]" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl text-[#F5F5F5] mb-3 sm:mb-4">
                    {product.name}
                  </h3>

                  <ul className="space-y-2 mb-3 sm:mb-4 flex-1">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm sm:text-base text-[#8A8A8A]"
                      >
                        <span className="text-[#B6B6B4] mt-1">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#000100]/50 rounded p-3 mb-4">
                    <p className="text-[#B6B6B4] text-xs sm:text-sm">
                      {product.size}
                    </p>
                  </div>

                  <button
                    onClick={() => handleEnquire(product.name)}
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-[#B6B6B4] text-[#000100] rounded-lg hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    aria-label={`Enquire about ${product.name}`}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}