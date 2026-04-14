'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Search, ShoppingCart, Menu, X, Instagram, Facebook } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 bg-gray-100 text-sm text-gray-600">
        <div className="flex gap-4">
          <a href="https://wa.me/5541999617630" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-600 transition-colors">
            <Phone className="w-4 h-4" /> (41) 99961-7630
          </a>
          <a href="tel:08006008191" className="flex items-center gap-2 hover:text-red-600 transition-colors">
            <Phone className="w-4 h-4" /> 0800 600 8191
          </a>
          <a href="tel:48641349" className="flex items-center gap-2 hover:text-red-600 transition-colors">
            <Phone className="w-4 h-4" /> 4864-1349
          </a>
          <a href="mailto:contato@euromats.com.br" className="flex items-center gap-2 hover:text-red-600 transition-colors">
            <Mail className="w-4 h-4" /> contato@euromats.com.br
          </a>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/euromatsoficial" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.facebook.com/euromatsoficial" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="https://euromats.com.br/wp-content/uploads/2024/11/Logo-Euro-Mats.webp"
            alt="Euro Mats Logo"
            width={200}
            height={66}
            className="h-12 w-auto"
            priority
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-800">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <Link href="/produtos" className="hover:text-red-600 transition-colors">Produtos</Link>
          <Link href="/segmentos" className="hover:text-red-600 transition-colors">Segmentos</Link>
          <Link href="/sobre-nos" className="hover:text-red-600 transition-colors">Sobre Nós</Link>
          <Link href="/contato" className="hover:text-red-600 transition-colors">Contato</Link>
          <Link href="/blog" className="hover:text-red-600 transition-colors">Blog</Link>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-600 hover:text-red-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">R$ 0,00</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4 font-medium text-gray-800">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <Link href="/produtos" className="hover:text-red-600 transition-colors">Produtos</Link>
            <Link href="/segmentos" className="hover:text-red-600 transition-colors">Segmentos</Link>
            <Link href="/sobre-nos" className="hover:text-red-600 transition-colors">Sobre Nós</Link>
            <Link href="/contato" className="hover:text-red-600 transition-colors">Contato</Link>
            <Link href="/blog" className="hover:text-red-600 transition-colors">Blog</Link>
          </nav>
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-100">
            <a href="https://wa.me/5541999617630" className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-md font-medium">
              <Phone className="w-4 h-4" /> Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
