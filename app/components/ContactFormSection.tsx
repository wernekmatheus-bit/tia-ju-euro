'use client';

import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato com Nossa Equipe</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg mb-4">
            Estamos prontos para atender sua empresa com agilidade e atenção. Fale conosco por telefone, WhatsApp ou e-mail e tire todas as suas dúvidas com quem entende de tapetes e capachos industriais.
          </p>
          <p className="text-gray-900 font-bold text-lg">
            Não cobramos frete para o cliente final!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-4 rounded-full text-red-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
                <a href="https://wa.me/5541999617630" className="text-gray-600 hover:text-red-600 transition-colors">(41) 99961-7630</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-4 rounded-full text-red-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">E-mail</h3>
                <a href="mailto:contato@euromats.com.br" className="text-gray-600 hover:text-red-600 transition-colors">contato@euromats.com.br</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-4 rounded-full text-red-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Telefone</h3>
                <a href="tel:08006008191" className="block text-gray-600 hover:text-red-600 transition-colors">0800 600 8191</a>
                <a href="tel:554130730298" className="block text-gray-600 hover:text-red-600 transition-colors">41 3073-0298 (Matriz)</a>
                <a href="tel:48641349" className="block text-gray-600 hover:text-red-600 transition-colors">4864-1349</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-4 rounded-full text-red-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Endereço</h3>
                <a href="https://maps.app.goo.gl/NF7YT5v3Kd3n7i728" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                  R. Santo Antonio Tortato, 251<br />
                  Barracão A - Umbará - Curitiba/PR
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite seu e-mail"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    pattern="[0-9()#&+*-=.]+"
                    title="Apenas números e caracteres de telefone (#, -, *, etc.) são aceitos."
                    placeholder="Digite seu telefone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Digite sua mensagem"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
