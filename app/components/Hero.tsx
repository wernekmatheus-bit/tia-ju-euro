'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Fábrica de Tapetes e Capachos',
    subtitle: 'Indústria nacional com mais de 25 anos de experiência em capachos personalizados e tapetes para empresas.',
    cta1: { text: 'Solicitar Orçamento', link: 'https://wa.me/5541999617630', icon: <Phone className="w-5 h-5 mr-2" /> },
    bgImage: 'https://picsum.photos/seed/euromats1/1920/1080',
  },
  {
    id: 2,
    title: 'Bobinas',
    subtitle: '',
    cta1: { text: 'Solicitar Orçamento', link: 'https://wa.me/5541999617630', icon: <Phone className="w-5 h-5 mr-2" /> },
    cta2: { text: 'Saiba Mais', link: '/bobinas-de-capacho/' },
    bgImage: 'https://picsum.photos/seed/euromats2/1920/1080',
  },
  {
    id: 3,
    title: 'Capachos Personalizados',
    subtitle: '',
    cta1: { text: 'Solicitar Orçamento', link: 'https://wa.me/5541999617630', icon: <Phone className="w-5 h-5 mr-2" /> },
    cta2: { text: 'Saiba Mais', link: '/fabrica-de-capachos-personalizados/' },
    bgImage: 'https://picsum.photos/seed/euromats3/1920/1080',
  },
  {
    id: 4,
    title: 'Home Center',
    subtitle: '',
    cta1: { text: 'Solicitar Orçamento', link: 'https://wa.me/5541999617630', icon: <Phone className="w-5 h-5 mr-2" /> },
    cta2: { text: 'Saiba Mais', link: '/home-centers/' },
    bgImage: 'https://picsum.photos/seed/euromats4/1920/1080',
  },
  {
    id: 5,
    title: 'Atacadistas',
    subtitle: '',
    cta1: { text: 'Solicitar Orçamento', link: 'https://wa.me/5541999617630', icon: <Phone className="w-5 h-5 mr-2" /> },
    cta2: { text: 'Saiba Mais', link: '/atacadistas/' },
    bgImage: 'https://picsum.photos/seed/euromats5/1920/1080',
  },
  {
    id: 6,
    title: 'Tapete Profissional Secante',
    subtitle: '',
    cta1: { text: 'Solicitar Orçamento', link: 'https://wa.me/5541999617630', icon: <Phone className="w-5 h-5 mr-2" /> },
    cta2: { text: 'Saiba Mais', link: '/tapete-profissional-secante/' },
    bgImage: 'https://picsum.photos/seed/euromats6/1920/1080',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>
            {slides[currentSlide].subtitle && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 mb-8"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            )}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {slides[currentSlide].cta1 && (
                <a
                  href={slides[currentSlide].cta1.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                >
                  {slides[currentSlide].cta1.icon}
                  {slides[currentSlide].cta1.text}
                </a>
              )}
              {slides[currentSlide].cta2 && (
                <Link
                  href={slides[currentSlide].cta2.link}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  {slides[currentSlide].cta2.text}
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
