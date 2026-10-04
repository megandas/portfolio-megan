import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { AppId } from '../types';
import {
  FolderKanban,
  User,
  Sparkles,
  FileText,
  Terminal,
  Images,
  Music,
  Mail,
  Sliders,
  FileCode2,
  Trash2,
} from 'lucide-react';

interface DockItemDef {
  id: AppId | 'trash';
  label: string;
  icon: React.ReactNode;
  color: string;
}

const DOCK_ITEMS: DockItemDef[] = [
  {
    id: 'projects',
    label: 'Case Studies',
    icon: <FolderKanban className="w-6 h-6 text-white" />,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'about',
    label: 'About Me',
    icon: <User className="w-6 h-6 text-white" />,
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'aichat',
    label: 'Ask AI Explorer',
    icon: <Sparkles className="w-6 h-6 text-white" />,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'terminal',
    label: 'Developer Terminal',
    icon: <Terminal className="w-6 h-6 text-white" />,
    color: 'from-slate-700 to-slate-900',
  },
  {
    id: 'resume',
    label: 'Resume.pdf',
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    color: 'from-red-500 to-rose-700',
  },
  {
    id: 'contact',
    label: 'Mail & Contact',
    icon: <Mail className="w-6 h-6 text-white" />,
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 'settings',
    label: 'System Settings',
    icon: <Sliders className="w-6 h-6 text-white" />,
    color: 'from-zinc-500 to-zinc-700',
  },
  {
    id: 'trash',
    label: 'Bin',
    icon: <Trash2 className="w-6 h-6 text-slate-300" />,
    color: 'from-slate-800 to-slate-950',
  },
];

export const Dock: React.FC = () => {
  const { openWindow, openWindows, activeWindowId } = usePortfolio();
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex items-end gap-2.5 px-3 py-2.5 rounded-2xl mac-glass mac-dock-shadow border border-white/20 backdrop-blur-2xl"
      >
        {DOCK_ITEMS.map((item) => {
          const isOpen =
            item.id !== 'trash' &&
            openWindows.some((w) => w.id === item.id && w.isOpen && !w.isMinimized);
          const isFocused = activeWindowId === item.id;

          return (
            <DockIcon
              key={item.id}
              item={item}
              mouseX={mouseX}
              isOpen={isOpen}
              isFocused={isFocused}
              onClick={() => {
                if (item.id === 'trash') {
                  // Trash action: reopen finder/projects
                  openWindow('projects');
                } else {
                  openWindow(item.id);
                }
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

interface DockIconProps {
  item: DockItemDef;
  mouseX: MotionValue<number>;
  isOpen: boolean;
  isFocused: boolean;
  onClick: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({
  item,
  mouseX,
  isOpen,
  isFocused,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, (val: number) => {
    const clamped = Math.max(-120, Math.min(120, val));
    const factor = 1 - Math.abs(clamped) / 120;
    return 46 + factor * 22;
  });
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 14 });

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="absolute -top-10 px-2.5 py-1 rounded-md text-[11px] font-medium tracking-tight bg-slate-900/90 text-slate-100 border border-white/10 shadow-lg backdrop-blur-md pointer-events-none whitespace-nowrap z-50 animate-in fade-in zoom-in-95 duration-100">
          {item.label}
        </div>
      )}

      <motion.button
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        whileTap={{ scale: 0.88 }}
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-b ${item.color} shadow-lg shadow-black/40 border border-white/20 transition-shadow focus:outline-none cursor-pointer group`}
      >
        <div className="flex items-center justify-center transition-transform group-hover:scale-105">
          {item.icon}
        </div>

        {/* Subtle glass reflection highlight */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/10 to-white/25 pointer-events-none" />
      </motion.button>

      {/* Running App Dot Indicator */}
      <div className="h-1.5 flex items-center justify-center mt-1">
        {isOpen && (
          <span
            className={`w-1 h-1 rounded-full transition-all ${
              isFocused ? 'bg-white shadow-[0_0_6px_#fff]' : 'bg-white/60'
            }`}
          />
        )}
      </div>
    </div>
  );
};
