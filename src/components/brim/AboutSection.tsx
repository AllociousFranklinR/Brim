import { Phone, Mail, Award, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onNavigateToContact: () => void;
}

export function AboutSection({ onNavigateToContact }: AboutSectionProps) {
  const whatsappNumber = '919445887243';
  const phoneNumber = '+91 9445887243';
  const email = 'brimdisplay@gmail.com';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'd like to know more about your LED Clocks.")}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#000100]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#292929] rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-[#B6B6B4]/20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#B6B6B4] mb-4 sm:mb-6 text-center">
            LED Clocks Built to Last
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-[#F5F5F5] mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
            Trusted by banks, offices & corporations nationwide. Get enterprise-grade quality with 7+ years of lifespan.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-[#000100]/50 rounded-lg border border-[#B6B6B4]/10 hover:border-[#B6B6B4]/30 transition-colors"
            >
              <Clock className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#B6B6B4] mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl text-[#F5F5F5] mb-1 sm:mb-2">7+ Years</h3>
              <p className="text-sm sm:text-base text-[#8A8A8A]">of Life</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-[#000100]/50 rounded-lg border border-[#B6B6B4]/10 hover:border-[#B6B6B4]/30 transition-colors"
            >
              <MapPin className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#B6B6B4] mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl text-[#F5F5F5] mb-1 sm:mb-2">Made in India</h3>
              <p className="text-sm sm:text-base text-[#8A8A8A]">Premium Quality</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-[#000100]/50 rounded-lg border border-[#B6B6B4]/10 hover:border-[#B6B6B4]/30 transition-colors sm:col-span-2 md:col-span-1"
            >
              <Award className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#B6B6B4] mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl text-[#F5F5F5] mb-1 sm:mb-2">35+ Years</h3>
              <p className="text-sm sm:text-base text-[#8A8A8A]">of Trust</p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-sm sm:text-base text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
              aria-label="Call Brim Clocks"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{phoneNumber}</span>
            </a>
            <span className="hidden sm:block text-[#8A8A8A]">|</span>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm sm:text-base text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
              aria-label="Email Brim Clocks"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="break-all">{email}</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              aria-label="Contact via WhatsApp"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </button>
            <button
              onClick={handleCall}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#B6B6B4] text-[#000100] rounded-lg hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              aria-label="Call Brim Clocks"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Now
            </button>
            <button
              onClick={onNavigateToContact}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#B6B6B4] text-[#B6B6B4] rounded-lg hover:bg-[#B6B6B4] hover:text-[#000100] transition-colors text-sm sm:text-base"
              aria-label="Go to Contact Page"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}