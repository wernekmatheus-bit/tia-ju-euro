'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const clients = [
  'https://euromats.com.br/wp-content/uploads/2025/08/Clientes-Euro-Mats-8.webp',
  'https://euromats.com.br/wp-content/uploads/2025/08/Clientes-Euro-Mats-4.webp',
  'https://euromats.com.br/wp-content/uploads/2025/08/Clientes-Euro-Mats-5.webp',
  'https://euromats.com.br/wp-content/uploads/2025/08/Clientes-Euro-Mats-2.webp',
  'https://euromats.com.br/wp-content/uploads/2025/08/Clientes-Euro-Mats-3.webp',
  'https://euromats.com.br/wp-content/uploads/2025/08/Clientes-Euro-Mats-6.webp',
  'https://euromats.com.br/wp-content/uploads/2025/08/Clientes-Euro-Mats-1.webp',
  'https://euromats.com.br/wp-content/uploads/2025/08/Clientes-Euro-Mats-7.webp',
];

export default function Clients() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clientes que Confiam na Euro Mats</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative w-full overflow-hidden mb-12">
          <div className="flex w-max animate-scroll">
            {/* Duplicate the list to create a seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-32 relative mx-4">
                <Image
                  src={client}
                  alt={`Cliente ${index + 1}`}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://wa.me/5541999617630"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 mr-2" />
            Fale Agora Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
