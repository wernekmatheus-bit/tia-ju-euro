import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Format slug to title (e.g. "bobinas-de-capacho" -> "Bobinas De Capacho")
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
          <div className="prose prose-lg text-gray-600 max-w-none mb-12">
            <p>
              Página em construção para <strong>{title}</strong>. Entre em contato conosco para mais informações sobre este produto ou segmento.
            </p>
          </div>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
