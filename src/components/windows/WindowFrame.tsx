import React, { useRef, useState, useEffect } from 'react';
import { motion, useDragControls } from 'motion/react';
import { usePortfolio } from '../../context/PortfolioContext';
import { AppId, WindowState } from '../../types';

interface WindowFrameProps {
  windowState: WindowState;
  children: React.ReactNode;
  headerCenter?: React.ReactNode;
  headerRight?: React.ReactNode;
  className?: string;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  windowState,
  children,
  headerCenter,
  headerRight,
  className = '',
}) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    activeWindowId,
    updateWindowPosition,
    updateWindowSize,
  } = usePortfolio();

  const isFocused = activeWindowId === windowState.id;
  const dragControls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);

  // Resize state
  const [isResizing, setIsResizing] = useState(false);
  const resizeStartRef = useRef<{ startX: number; startY: number; startW: number; startH: number }>({
    startX: 0,
    startY: 0,
    startW: 0,
    startH: 0,
  });

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    resizeStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startW: windowState.size.width,
      startH: windowState.size.height,
    };
  };

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - resizeStartRef.current.startX;
      const dy = e.clientY - resizeStartRef.current.startY;
      const newW = Math.max(480, Math.min(window.innerWidth - 40, resizeStartRef.current.startW + dx));
      const newH = Math.max(340, Math.min(window.innerHeight - 100, resizeStartRef.current.startH + dy));
      updateWindowSize(windowState.id, { width: newW, height: newH });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, windowState.id, updateWindowSize]);

  if (!windowState.isOpen || windowState.isMinimized) {
    return null;
  }

  // Calculate coordinates if maximized
  const position = windowState.isMaximized
    ? { x: 12, y: 36 }
    : windowState.position;

  const size = windowState.isMaximized
    ? { width: window.innerWidth - 24, height: window.innerHeight - 110 }
    : windowState.size;

  return (
    <motion.div
      ref={windowRef}
      onPointerDown={() => focusWindow(windowState.id)}
      drag={!windowState.isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onDragEnd={(_, info) => {
        const newX = Math.max(0, Math.min(window.innerWidth - 200, windowState.position.x + info.offset.x));
        const newY = Math.max(32, Math.min(window.innerHeight - 200, windowState.position.y + info.offset.y));
        updateWindowPosition(windowState.id, { x: newX, y: newY });
      }}
      initial={{ scale: 0.94, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.94, opacity: 0 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: windowState.zIndex,
      }}
      className={`rounded-2xl mac-glass mac-window-shadow border overflow-hidden flex flex-col ${
        isFocused ? 'border-white/25 ring-1 ring-white/10' : 'border-white/10 opacity-95'
      } ${className}`}
    >
      {/* Window Titlebar Header (Draggable) */}
      <div
        onPointerDown={(e) => {
          dragControls.start(e);
          focusWindow(windowState.id);
        }}
        onDoubleClick={() => maximizeWindow(windowState.id)}
        className="h-10 bg-slate-950/80 border-b border-white/10 px-4 flex items-center justify-between select-none cursor-grab active:cursor-grabbing shrink-0"
      >
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2 group/lights w-20">
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(windowState.id);
            }}
            className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 text-black/60 group"
            title="Close"
            aria-label="Close"
          >
            <span className="opacity-0 group-hover/lights:opacity-100 text-[9px] font-bold leading-none">
              ×
            </span>
          </button>

          {/* Minimize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(windowState.id);
            }}
            className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 text-black/60"
            title="Minimize"
            aria-label="Minimize"
          >
            <span className="opacity-0 group-hover/lights:opacity-100 text-[9px] font-bold leading-none">
              −
            </span>
          </button>

          {/* Maximize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              maximizeWindow(windowState.id);
            }}
            className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 text-black/60"
            title="Zoom / Fullscreen"
            aria-label="Zoom"
          >
            <span className="opacity-0 group-hover/lights:opacity-100 text-[8px] font-bold leading-none">
              +
            </span>
          </button>
        </div>

        {/* Center Title or Segmented Switcher */}
        <div className="flex-1 flex justify-center items-center min-w-0 px-2 pointer-events-auto">
          {headerCenter ? (
            headerCenter
          ) : (
            <span className="text-xs font-semibold text-slate-200 truncate tracking-tight">
              {windowState.title}
            </span>
          )}
        </div>

        {/* Right Header Affordance */}
        <div className="w-20 flex justify-end items-center pointer-events-auto">
          {headerRight}
        </div>
      </div>

      {/* Window Body Content */}
      <div className="flex-1 overflow-auto bg-slate-950/70 text-slate-100 relative">
        {children}
      </div>

      {/* Resize Handle (Bottom Right Corner) */}
      {!windowState.isMaximized && (
        <div
          onMouseDown={handleResizeMouseDown}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end p-0.5 z-30 select-none group"
          title="Drag to resize"
        >
          <svg className="w-2.5 h-2.5 text-white/30 group-hover:text-white/70" viewBox="0 0 10 10">
            <line x1="8" y1="2" x2="2" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <line x1="9" y1="5" x2="5" y2="9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};
