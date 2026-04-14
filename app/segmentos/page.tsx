import Header from '../components/Header';
import Footer from '../components/Footer';
import Segments from '../components/Segments';
import ContactCTA from '../components/ContactCTA';

export default function SegmentosPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Segmentos Atendidos</h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Temos soluções sob medida para quem busca capacho para loja, revenda, distribuição ou representação comercial.
          </p>
        </div>
        <Segments />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
