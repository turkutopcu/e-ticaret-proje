import Navbar from './components/Navbar';
import TrendSlider from './components/TrendSlider'; // Dosya adın küçük 't' ile ise ona dikkat et
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { products } from './data/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between">
      {/* 1. Navbar */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 2. Trend Yemekler Slider */}
        <section className="pt-4">
          <TrendSlider />
        </section>

        {/* 3. Menü & 12 Ürün Listesi */}
        <section className="py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">
                Menümüzü Keşfedin
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">
                Günün Popüler Lezzetleri
              </h1>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              Şeflerimizin taze malzemelerle hazırladığı 12 özel lezzet arasından seçimini yap, anında kapına gelsin.
            </p>
          </div>

          {/* 12 Ürünlük Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}