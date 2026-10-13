export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-white font-bold flex items-center justify-center">
              L
            </span>
            <span className="text-xl font-bold text-white tracking-tight">
              Lezzet<span className="text-amber-500">Go</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Şehrin en lezzetli gurme lezzetlerini kapınıza dakikalar içinde sıcak ve taze olarak getiriyoruz.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Hızlı Linkler</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Menüler</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Kampanyalar</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Kurye Ol</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kategoriler</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Burgerler</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Taş Fırın Pizza</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">İtalyan Makarnalar</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Tatlılar & İçecekler</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">İletişim & Destek</h4>
          <p className="text-sm mb-2">Haftanın her günü 10:00 - 02:00</p>
          <p className="text-amber-400 font-bold text-lg mb-4">0850 123 45 67</p>
          <p className="text-xs text-gray-500">destek@lezzetgo.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} LezzetGo. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}