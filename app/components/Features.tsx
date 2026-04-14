'use client';

import { motion } from 'motion/react';
import { Phone, Scissors, Globe, Truck, Factory, Tag, Check } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="w-8 h-8 text-red-600" />,
    title: 'Capachos personalizados sob medida',
  },
  {
    icon: <Globe className="w-8 h-8 text-red-600" />,
    title: 'Atendimento para todo o Brasil',
  },
  {
    icon: <Truck className="w-8 h-8 text-red-600" />,
    title: 'Entrega grátis para varejo',
  },
  {
    icon: <Factory className="w-8 h-8 text-red-600" />,
    title: 'Indústria nacional',
  },
  {
    icon: <Tag className="w-8 h-8 text-red-600" />,
    title: 'Tapetes com preço de fábrica',
  },
  {
    icon: <Check className="w-8 h-8 text-red-600" />,
    title: 'Tecnologia e acabamento premium',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a Euro Mats?
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <a
              href="https://wa.me/5541999617630"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2" />
              Entre em Contato
            </a>
          </motion.div>

          {/* Right Column - Features Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 p-3 bg-red-50 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <a
            href="https://wa.me/5541999617630"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
          >
            <Phone className="w-5 h-5 mr-2" />
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
