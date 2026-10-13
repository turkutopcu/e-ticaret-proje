import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-10 h-10 rounded-xl bg-amber-500 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
            L
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Lezzet<span className="text-amber-500">Go</span>
          </span>
        </Link>

        {/* Arama Alanı (Masaüstü) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Canın ne çekiyor? Burger, makarna, tatlı..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              🔍
            </span>
          </div>
        </div>

        {/* Sağ Butonlar */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors">
            Giriş Yap
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-white font-medium text-sm hover:bg-amber-600 active:scale-95 shadow-md shadow-amber-500/20 transition-all">
            <span>🛒</span>
            <span>Sepetim</span>
            <span className="w-5 h-5 rounded-full bg-white text-amber-600 text-xs font-bold flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}