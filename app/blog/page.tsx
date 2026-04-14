import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog</h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
          <p className="text-lg text-gray-600">
            Em breve, novidades e dicas sobre tapetes e capachos.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
