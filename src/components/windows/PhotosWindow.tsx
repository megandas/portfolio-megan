import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { GalleryItem } from '../../types';
import { Images, X, ZoomIn } from 'lucide-react';

export const PhotosWindow: React.FC = () => {
  const { gallery } = usePortfolio();
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Images className="w-5 h-5 text-pink-400" />
            <span>Design Vault & Visual Artifacts</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Interface details, generative token explorations, and studio experiments.
          </p>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 aspect-video cursor-pointer shadow-lg hover:shadow-2xl hover:border-pink-400/40 transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

            {/* Hover overlay hint */}
            <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>

            {/* Title & Caption */}
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-[10px] uppercase tracking-wider text-pink-400 font-semibold">
                {item.category}
              </span>
              <h3 className="text-sm font-bold text-white truncate">
                {item.title}
              </h3>
              <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="max-w-4xl w-full mac-glass rounded-2xl overflow-hidden border border-white/20 shadow-2xl space-y-3 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <span className="text-xs text-pink-400 font-semibold uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <h2 className="text-base font-bold text-white">
                  {activeItem.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-black max-h-[70vh] flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[65vh]"
              />
            </div>

            <p className="text-xs text-slate-300 pt-1">
              {activeItem.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
