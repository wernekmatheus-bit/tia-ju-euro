'use client';

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Fale com os nossos vendedores e consulte nosso catálogo
            </h2>
            <p className="text-xl text-gray-300">
              Tapetes direto da fábrica, com entrega para todo o Brasil e atendimento especializado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center md:justify-end"
          >
            <a
              href="https://wa.me/5541999617630"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white text-lg font-bold rounded-md hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full md:w-auto"
            >
              <Phone className="w-6 h-6 mr-3" />
              Encomendar Agora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
