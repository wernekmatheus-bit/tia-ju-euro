'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const segments = [
  {
    title: 'Lojistas',
    link: '/lojistas/',
    image: 'https://euromats.com.br/wp-content/uploads/2025/07/Lojistas-3.webp',
  },
  {
    title: 'Atacadistas',
    link: '/atacadistas/',
    image: 'https://euromats.com.br/wp-content/uploads/2025/07/Atacadistas-2-768x576.webp',
  },
  {
    title: 'Home Centers',
    link: '/home-centers/',
    image: 'https://euromats.com.br/wp-content/uploads/2025/07/Home-Center.webp',
  },
  {
    title: 'Representantes Comerciais',
    link: '/representantes-comerciais/',
    image: 'https://euromats.com.br/wp-content/uploads/2025/07/Representantes-COmerciais-768x576.webp',
  },
  {
    title: 'Revendedores',
    link: '/revendedores/',
    image: 'https://euromats.com.br/wp-content/uploads/2025/07/Euromats-3-768x576.webp',
  },
];

export default function Segments() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluções para Diferentes Públicos</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Temos soluções sob medida para quem busca capacho para loja, revenda, distribuição ou representação comercial. Entre em contato para parceria comercial.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={segment.image}
                      alt={segment.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      {segment.title}
                    </h3>
                    <div className="mt-auto flex flex-col gap-3">
                      <a
                        href="https://wa.me/5541999617630"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors w-full"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Solicitar Orçamento
                      </a>
                      <Link
                        href={segment.link}
                        className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors w-full"
                      >
                        Saiba Mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
