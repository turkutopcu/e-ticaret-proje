'use client';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      {/* Ürün Görseli */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
          {product.category}
        </span>
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-amber-600 flex items-center gap-1 shadow-sm">
          ⭐ {product.rating}
        </span>
      </div>

      {/* Kart Bilgileri */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 mb-4">Özenle seçilmiş taze malzemeler</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div>
            <span className="text-xs text-gray-400 block">Fiyat</span>
            <span className="text-xl font-extrabold text-gray-900">
              ₺{product.price}
            </span>
          </div>

          <button
            onClick={() => alert(`${product.name} sepete eklendi!`)}
            className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 font-bold hover:bg-amber-500 hover:text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm"
            title="Sepete Ekle"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}