import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { AppId } from '../types';
import {
  Folder,
  User,
  Sparkles,
  FileText,
  FileCode2,
  Image,
  Sliders,
  Mail,
} from 'lucide-react';

interface DesktopItem {
  id: AppId;
  label: string;
  icon: React.ReactNode;
  defaultPosition: { x: number; y: number };
}

const DESKTOP_ITEMS: DesktopItem[] = [
  {
    id: 'projects',
    label: 'Case Studies',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform backdrop-blur-md">
        <Folder className="w-7 h-7 text-blue-400 fill-blue-400/30" />
      </div>
    ),
    defaultPosition: { x: 24, y: 36 },
  },
  {
    id: 'about',
    label: 'About Megan',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform backdrop-blur-md">
        <User className="w-6 h-6 text-amber-300" />
      </div>
    ),
    defaultPosition: { x: 24, y: 130 },
  },
  {
    id: 'aichat',
    label: 'Ask AI Chat',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform backdrop-blur-md">
        <Sparkles className="w-6 h-6 text-purple-300" />
      </div>
    ),
    defaultPosition: { x: 24, y: 224 },
  },
  {
    id: 'resume',
    label: 'Resume.pdf',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform backdrop-blur-md">
        <FileCode2 className="w-6 h-6 text-rose-300" />
      </div>
    ),
    defaultPosition: { x: 24, y: 318 },
  },
  {
    id: 'contact',
    label: 'Mail & Inquiries',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform backdrop-blur-md">
        <Mail className="w-6 h-6 text-sky-300" />
      </div>
    ),
    defaultPosition: { x: 24, y: 412 },
  },
  {
    id: 'settings',
    label: 'Customize Portfolio',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform backdrop-blur-md">
        <Sliders className="w-6 h-6 text-emerald-300" />
      </div>
    ),
    defaultPosition: { x: 114, y: 36 },
  },
];

export const DesktopIcons: React.FC = () => {
  const { openWindow } = usePortfolio();

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {DESKTOP_ITEMS.map((item) => (
        <motion.div
          key={item.id}
          drag
          dragMomentum={false}
          initial={{ x: item.defaultPosition.x, y: item.defaultPosition.y }}
          className="pointer-events-auto absolute flex flex-col items-center gap-1.5 w-20 p-1.5 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors cursor-pointer group focus:outline-none"
          onClick={() => openWindow(item.id)}
          onDoubleClick={() => openWindow(item.id)}
        >
          {item.icon}
          <span className="text-[11px] font-medium text-slate-100 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] tracking-tight leading-tight px-1 py-0.5 rounded group-hover:bg-slate-900/60 transition-colors line-clamp-2">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
