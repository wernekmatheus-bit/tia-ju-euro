import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/">
            <Image
              src="https://euromats.com.br/wp-content/uploads/2024/11/Logo-Euro-Mats.webp"
              alt="Euro Mats Logo"
              width={200}
              height={66}
              className="h-12 w-auto mb-6 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-sm mb-6 max-w-md">
            Fábrica de tapetes e capachos com entrega para todo o Brasil. Produzimos tapetes personalizados, capachos para empresas e bobinas.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/euromatsoficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/euromatsoficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
            <li><Link href="/segmentos" className="hover:text-white transition-colors">Segmentos</Link></li>
            <li><Link href="/sobre-nos" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Contato</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>(41) 99961-7630</li>
            <li>0800 600 8191</li>
            <li>contato@euromats.com.br</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Euro Mats. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
