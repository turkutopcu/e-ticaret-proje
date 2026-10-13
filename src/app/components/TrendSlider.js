'use client';

import { useState, useEffect } from 'react';
import { trendFoods } from '../data/products';

export default function TrendSlider() {
  const [current, setCurrent] = useState(0);

  // 5 saniyede bir otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === trendFoods.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? trendFoods.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === trendFoods.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-[460px] md:h-[500px] overflow-hidden rounded-3xl shadow-xl bg-gray-900 my-8">
      {trendFoods.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Arka Plan Görseli */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover brightness-75"
          />

          {/* Karartma Gradyanı */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* İçerik */}
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-8 md:p-16 max-w-2xl text-white">
            <span className="inline-block w-fit px-3 py-1 mb-4 rounded-full bg-amber-500 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              {item.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-3 leading-tight">
              {item.title}
            </h2>
            <p className="text-gray-200 text-sm md:text-base mb-6 line-clamp-2">
              {item.desc}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl md:text-3xl font-extrabold text-amber-400">
                ₺{item.price}
              </span>
              <button className="px-6 py-3 rounded-xl bg-white text-gray-950 font-bold hover:bg-amber-400 transition-colors shadow-lg active:scale-95">
                Hemen Sipariş Ver
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* İleri / Geri Okları */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all"
        aria-label="Önceki"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all"
        aria-label="Sonraki"
      >
        ❯
      </button>

      {/* Gösterge Noktaları (Dots) */}
      <div className="absolute bottom-6 right-8 z-20 flex gap-2">
        {trendFoods.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === current ? 'w-8 bg-amber-500' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}