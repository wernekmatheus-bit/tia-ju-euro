'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://euromats.com.br/wp-content/uploads/2025/09/Euro-Mats.webp"
              alt="Fábrica Euro Mats"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-10">
              <Image
                src="https://euromats.com.br/wp-content/uploads/2025/07/Euro-Mats.webp"
                alt="Tapetes Euro Mats"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tapetes e Capachos Direto da Fábrica
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <div className="prose prose-lg text-gray-600 mb-10">
              <p>
                A Euro Mats é uma fábrica de tapetes e capachos localizada em Curitiba, com produção 100% nacional. Atuamos há mais de duas décadas como indústria de tapetes especializada em atender empresas, lojistas e home centers de todo o país. Oferecemos tapetes por encomenda e capachos personalizados com qualidade superior, tecnologia de ponta e atendimento próximo e eficiente.
              </p>
              <p>
                Além de atender o varejo com tapetes direto da fábrica e entrega gratuita, também trabalhamos com condições especiais para quem busca tapetes com preço de fábrica em grande escala. Nossa estrutura industrial permite agilidade na produção e diversidade de modelos para empresas de todos os portes.
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
                href="/produtos"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Conhecer Produtos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
