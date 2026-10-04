import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Wifi,
  Search,
  Sliders,
  Volume2,
  VolumeX,
  Battery,
  Sparkles,
  Command,
} from 'lucide-react';

export const MenuBar: React.FC = () => {
  const {
    activeWindowId,
    openWindow,
    toggleControlCenter,
    toggleSpotlight,
    toggleAppleMenu,
    isAppleMenuOpen,
    isPlayingMusic,
    togglePlayMusic,
    soundEffectsEnabled,
    toggleSoundEffects,
  } = usePortfolio();

  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
      );
      setCurrentDate(
        now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getAppName = () => {
    switch (activeWindowId) {
      case 'about':
        return 'About Me';
      case 'projects':
        return 'Projects';
      case 'aichat':
        return 'Ask Megan AI';
      case 'terminal':
        return 'Terminal';
      case 'photos':
        return 'Photos';
      case 'music':
        return 'Music';
      case 'contact':
        return 'Mail';
      case 'settings':
        return 'Settings';
      case 'resume':
        return 'Preview';
      default:
        return 'Finder';
    }
  };

  return (
    <header className="relative z-50 h-7 w-full bg-slate-950/70 backdrop-blur-xl border-b border-white/10 px-3.5 flex items-center justify-between text-[13px] font-medium text-slate-200 select-none">
      {/* Left Menu Zone */}
      <div className="flex items-center gap-4">
        {/* Apple Icon */}
        <button
          onClick={() => toggleAppleMenu()}
          className="hover:opacity-75 transition-opacity px-1 py-0.5 rounded cursor-pointer"
          title="Apple Menu"
          aria-label="Apple Menu"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.7-11.71-13.98-5.77-8.73-10.37-18.79-13.8-30.17-3.43-11.39-5.14-22.31-5.14-32.77 0-14.36 3.63-26.31 10.89-35.85 7.26-9.54 16.48-14.42 27.67-14.64 4.8 0 10.15 1.25 16.06 3.75 5.91 2.5 9.77 3.86 11.58 4.08 1.48-.22 5.6-1.63 12.37-4.24 6.78-2.61 12.44-3.75 16.99-3.41 12.98.87 23.39 5.86 31.23 14.97-11.19 6.74-16.68 16.19-16.47 28.36.22 9.57 3.91 17.51 11.09 23.82 7.17 6.31 15.54 10.01 25.1 11.1-2.18 6.53-4.79 13.06-7.82 19.59zM119.22 31.84c0-7.72 2.76-14.89 8.27-21.52 5.52-6.63 12.42-10.32 20.71-11.08.22 1.3.33 2.39.33 3.26 0 7.61-2.93 15-8.8 22.18-5.87 7.17-13.05 11.09-21.52 11.74-.22-1.52-.33-2.93-.33-4.22z" />
          </svg>
        </button>

        {/* Current Active Application Name */}
        <span className="font-semibold text-slate-100 cursor-default">
          {getAppName()}
        </span>

        {/* Menus */}
        <div className="hidden md:flex items-center gap-3.5 text-slate-300">
          <button
            onClick={() => openWindow('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => openWindow('projects')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => openWindow('aichat')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-sky-400" />
            <span>Ask AI</span>
          </button>
          <button
            onClick={() => openWindow('resume')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Resume
          </button>
          <button
            onClick={() => openWindow('settings')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Customize
          </button>
        </div>
      </div>

      {/* Right Status Tray Zone */}
      <div className="flex items-center gap-3 text-slate-300">
        {/* Procedural Ambient Music Quick Action */}
        <button
          onClick={togglePlayMusic}
          className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-xs transition-colors cursor-pointer ${
            isPlayingMusic
              ? 'text-sky-300 bg-sky-500/20 border border-sky-400/30'
              : 'hover:text-white'
          }`}
          title={isPlayingMusic ? 'Pause Lo-Fi Beats' : 'Play Ambient Lo-Fi'}
        >
          {isPlayingMusic ? (
            <>
              <span className="flex gap-0.5 items-end h-3">
                <span className="w-0.5 bg-sky-400 animate-pulse h-3"></span>
                <span className="w-0.5 bg-sky-400 animate-pulse h-2"></span>
                <span className="w-0.5 bg-sky-400 animate-pulse h-3.5"></span>
              </span>
              <span className="hidden sm:inline text-[11px] font-mono">Lo-Fi</span>
            </>
          ) : (
            <span className="text-[11px] font-mono text-slate-400">Play Audio</span>
          )}
        </button>

        {/* Sound Effects Toggle */}
        <button
          onClick={toggleSoundEffects}
          className="hover:text-white transition-colors p-1"
          title={soundEffectsEnabled ? 'Sound Effects Enabled' : 'Sound Effects Muted'}
          aria-label="Sound Effects Toggle"
        >
          {soundEffectsEnabled ? (
            <Volume2 className="w-3.5 h-3.5" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          )}
        </button>

        {/* Wi-Fi Icon */}
        <button
          onClick={() => toggleControlCenter()}
          className="hover:text-white transition-colors p-1"
          title="Wi-Fi: Connected to Studio-5G"
          aria-label="Wi-Fi"
        >
          <Wifi className="w-3.5 h-3.5 text-emerald-400" />
        </button>

        {/* Battery Status */}
        <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
          <span>98%</span>
          <Battery className="w-4 h-4 text-emerald-400" />
        </div>

        {/* Spotlight Trigger */}
        <button
          onClick={() => toggleSpotlight()}
          className="hover:text-white transition-colors flex items-center gap-1 bg-white/5 hover:bg-white/10 px-1.5 py-0.5 rounded border border-white/10 cursor-pointer"
          title="Spotlight Search (Cmd+K)"
          aria-label="Spotlight Search"
        >
          <Search className="w-3 h-3 text-slate-400" />
          <span className="hidden lg:inline text-[10px] font-mono text-slate-400">
            <Command className="w-2.5 h-2.5 inline mr-0.5" />K
          </span>
        </button>

        {/* Control Center */}
        <button
          onClick={() => toggleControlCenter()}
          className="hover:text-white transition-colors p-1 cursor-pointer"
          title="Control Center"
          aria-label="Control Center"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>

        {/* Date & Time */}
        <button
          onClick={() => toggleControlCenter()}
          className="hover:text-white transition-colors cursor-pointer text-[12px] font-medium tracking-tight whitespace-nowrap pl-1"
        >
          <span className="hidden sm:inline text-slate-400 mr-1.5">{currentDate}</span>
          <span>{currentTime}</span>
        </button>
      </div>

      {/* Apple Dropdown Menu */}
      {isAppleMenuOpen && (
        <div className="absolute top-7 left-2 w-56 mac-glass rounded-lg py-1.5 text-[13px] text-slate-200 z-50 shadow-2xl border border-white/15 animate-in fade-in slide-in-from-top-1 duration-150">
          <button
            onClick={() => {
              openWindow('about');
              toggleAppleMenu(false);
            }}
            className="w-full text-left px-4 py-1.5 hover:bg-sky-600 hover:text-white flex items-center justify-between"
          >
            <span>About This Portfolio</span>
          </button>
          <button
            onClick={() => {
              openWindow('settings');
              toggleAppleMenu(false);
            }}
            className="w-full text-left px-4 py-1.5 hover:bg-sky-600 hover:text-white flex items-center justify-between"
          >
            <span>System Settings...</span>
          </button>
          <div className="h-px bg-white/10 my-1 mx-2" />
          <button
            onClick={() => {
              openWindow('projects');
              toggleAppleMenu(false);
            }}
            className="w-full text-left px-4 py-1.5 hover:bg-sky-600 hover:text-white flex items-center justify-between"
          >
            <span>Case Studies Catalog</span>
          </button>
          <button
            onClick={() => {
              openWindow('aichat');
              toggleAppleMenu(false);
            }}
            className="w-full text-left px-4 py-1.5 hover:bg-sky-600 hover:text-white flex items-center justify-between"
          >
            <span>Ask AI Case Study Bot</span>
          </button>
          <button
            onClick={() => {
              openWindow('terminal');
              toggleAppleMenu(false);
            }}
            className="w-full text-left px-4 py-1.5 hover:bg-sky-600 hover:text-white flex items-center justify-between"
          >
            <span>Open Terminal</span>
          </button>
          <div className="h-px bg-white/10 my-1 mx-2" />
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="w-full text-left px-4 py-1.5 hover:bg-sky-600 hover:text-white flex items-center justify-between"
          >
            <span>Restart Portfolio...</span>
          </button>
        </div>
      )}
    </header>
  );
};
