'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const images = [
  'https://euromats.com.br/wp-content/uploads/2026/03/img-quemsomos-01.webp',
  'https://euromats.com.br/wp-content/uploads/2026/03/img-quemsomos-02.webp',
  'https://euromats.com.br/wp-content/uploads/2026/03/img-quemsomos-03-1.webp',
  'https://euromats.com.br/wp-content/uploads/2026/03/img-quemsomos-05.webp',
  'https://euromats.com.br/wp-content/uploads/2026/03/img-quemsomos-06.webp',
  'https://euromats.com.br/wp-content/uploads/2026/03/img-quemsomos-07.webp',
  'https://euromats.com.br/wp-content/uploads/2026/03/img-quemsomos-08.webp',
];

export default function Company() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Indústria de Tapetes e Capachos
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <div className="prose prose-lg text-gray-600 mb-10">
              <p>
                A Euro Mats é uma indústria de tapetes e capachos com sede em Curitiba, com mais de 25 anos de atuação no mercado nacional. Com mais de 4.000 clientes atendidos e 23.000 modelos produzidos, somos referência em capacho para empresa, capachos personalizados e tapetes para ambientes corporativos.
              </p>
              <p>
                Nosso foco é oferecer qualidade, personalização e agilidade na entrega, sempre acompanhando as tendências do mercado e investindo em tecnologia e inovação. Atendemos desde pequenos empreendedores até grandes corporações, desenvolvendo capacho para empresa sob medida, com produção 100% nacional e soluções que unem durabilidade, identidade visual e acabamento premium.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5541999617630"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Fale Conosco!
              </a>
              <Link
                href="/sobre-nos"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Sobre Nós
              </Link>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src={images[currentSlide]}
              alt="Fábrica Euro Mats"
              fill
              className="object-cover transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/50 hover:bg-white/80 rounded-full text-gray-900 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/50 hover:bg-white/80 rounded-full text-gray-900 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
