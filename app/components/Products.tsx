'use client';

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conheça Nossas Linhas de Produtos</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg mb-8">
            Fabricamos todos os modelos com materiais de alta qualidade e tecnologia de ponta, oferecendo tapetes e capachos com preço de fábrica e durabilidade comprovada. Para conhecer nosso catálogo completo, entre em contato com nossa equipe de vendas.
          </p>
          <a
            href="https://wa.me/5541999617630"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white text-lg font-bold rounded-md hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6 mr-3" />
            Solicitar Catálogo pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
