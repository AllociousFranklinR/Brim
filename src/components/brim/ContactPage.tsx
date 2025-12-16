import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const phoneNumber = '+91 9445887243';
  const email = 'brimdisplay@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Open WhatsApp with the message
      const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
      window.open(`https://wa.me/919445887243?text=${encodeURIComponent(message)}`, '_blank');

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSubmitStatus('idle');
      }, 2000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#000100] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#B6B6B4] mb-3 sm:mb-4 px-2">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#8A8A8A] px-2">
            Let's discuss how we can help with your LED clock needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-[#292929] rounded-lg p-6 sm:p-7 md:p-8 border border-[#B6B6B4]/20">
              <h2 className="text-xl sm:text-2xl text-[#B6B6B4] mb-4 sm:mb-6">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-start gap-3 sm:gap-4 text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors group"
                  aria-label="Call Brim Clocks"
                >
                  <div className="bg-[#B6B6B4]/10 p-2.5 sm:p-3 rounded-lg group-hover:bg-[#B6B6B4]/20 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#B6B6B4]" />
                  </div>
                  <div>
                    <p className="text-[#8A8A8A] text-xs sm:text-sm mb-1">Phone</p>
                    <p className="text-base sm:text-lg">{phoneNumber}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-3 sm:gap-4 text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors group"
                  aria-label="Email Brim Clocks"
                >
                  <div className="bg-[#B6B6B4]/10 p-2.5 sm:p-3 rounded-lg group-hover:bg-[#B6B6B4]/20 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#B6B6B4]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#8A8A8A] text-xs sm:text-sm mb-1">Email</p>
                    <p className="text-base sm:text-lg break-all">{email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 sm:gap-4 text-[#F5F5F5]">
                  <div className="bg-[#B6B6B4]/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#B6B6B4]" />
                  </div>
                  <div>
                    <p className="text-[#8A8A8A] text-xs sm:text-sm mb-1">Location</p>
                    <p className="text-base sm:text-lg">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#292929] rounded-lg p-6 sm:p-7 md:p-8 border border-[#B6B6B4]/20">
              <h3 className="text-lg sm:text-xl text-[#B6B6B4] mb-4 sm:mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-[#000100]/50 rounded-lg">
                  <p className="text-2xl sm:text-3xl text-[#B6B6B4] mb-1">7+</p>
                  <p className="text-xs sm:text-sm text-[#8A8A8A]">Years Lifespan</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[#000100]/50 rounded-lg">
                  <p className="text-2xl sm:text-3xl text-[#B6B6B4] mb-1">35+</p>
                  <p className="text-xs sm:text-sm text-[#8A8A8A]">Years Trust</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[#000100]/50 rounded-lg">
                  <p className="text-2xl sm:text-3xl text-[#B6B6B4] mb-1">100%</p>
                  <p className="text-xs sm:text-sm text-[#8A8A8A]">Made in India</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[#000100]/50 rounded-lg">
                  <p className="text-2xl sm:text-3xl text-[#B6B6B4] mb-1">24/7</p>
                  <p className="text-xs sm:text-sm text-[#8A8A8A]">Support</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-[#292929] rounded-lg p-6 sm:p-7 md:p-8 border border-[#B6B6B4]/20">
              <h2 className="text-xl sm:text-2xl text-[#B6B6B6] mb-4 sm:mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base text-[#F5F5F5] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base text-[#F5F5F5] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base text-[#F5F5F5] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors text-sm sm:text-base"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base text-[#F5F5F5] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#B6B6B4] text-[#000100] rounded-lg hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#000100]/20 border-t-[#000100] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-center text-[#25D366] text-sm sm:text-base">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}