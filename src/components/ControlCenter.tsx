import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Wifi,
  Bluetooth,
  Moon,
  Sun,
  Volume2,
  Play,
  Pause,
  SkipForward,
  Sparkles,
  Sliders,
  Image,
} from 'lucide-react';

export const ControlCenter: React.FC = () => {
  const {
    isControlCenterOpen,
    toggleControlCenter,
    musicVolume,
    setVolume,
    isPlayingMusic,
    togglePlayMusic,
    nextTrack,
    audioTracks,
    currentTrackIndex,
    soundEffectsEnabled,
    toggleSoundEffects,
    wallpapersList,
    wallpaper,
    setWallpaper,
    openWindow,
  } = usePortfolio();

  if (!isControlCenterOpen) return null;

  const currentTrack = audioTracks[currentTrackIndex];

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-auto"
      onClick={() => toggleControlCenter(false)}
    >
      <div
        className="absolute top-9 right-3 w-80 mac-glass rounded-2xl p-3.5 border border-white/20 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 text-slate-200 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top 2-Column Controls */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Connectivity Group */}
          <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center">
                <Wifi className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white">Wi-Fi</div>
                <div className="text-[10px] text-slate-300 truncate">Studio-5G</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Bluetooth className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white">Bluetooth</div>
                <div className="text-[10px] text-slate-300">Magic Trackpad</div>
              </div>
            </div>
          </div>

          {/* Quick Toggles */}
          <div className="grid grid-rows-2 gap-2">
            <button
              onClick={toggleSoundEffects}
              className={`rounded-xl p-2.5 border transition-all text-left flex items-center gap-2.5 cursor-pointer ${
                soundEffectsEnabled
                  ? 'bg-sky-500/20 border-sky-400/40 text-white'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  soundEffectsEnabled
                    ? 'bg-sky-500 text-white'
                    : 'bg-white/10 text-slate-400'
                }`}
              >
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold">Sound FX</div>
                <div className="text-[10px]">
                  {soundEffectsEnabled ? 'Enabled' : 'Muted'}
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                openWindow('aichat');
                toggleControlCenter(false);
              }}
              className="rounded-xl p-2.5 bg-violet-500/20 border border-violet-400/40 hover:bg-violet-500/30 text-white transition-all text-left flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-violet-500 text-white flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold">Ask AI</div>
                <div className="text-[10px] text-violet-200">Case Study Bot</div>
              </div>
            </button>
          </div>
        </div>

        {/* Display / Brightness */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
            <span>Display Brightness</span>
            <Sun className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <input
            type="range"
            min="0.5"
            max="1"
            step="0.05"
            defaultValue="1"
            className="w-full accent-sky-400 cursor-pointer h-1.5 bg-white/20 rounded-lg"
          />
        </div>

        {/* Sound Volume Slider */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
            <span>Sound Volume</span>
            <span className="text-[11px] font-mono text-slate-400">
              {Math.round(musicVolume * 100)}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={musicVolume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full accent-sky-400 cursor-pointer h-1.5 bg-white/20 rounded-lg"
          />
        </div>

        {/* Music Mini Player */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-semibold text-white truncate">
              {currentTrack.title}
            </div>
            <div className="text-[10px] text-slate-400 truncate">
              {currentTrack.artist}
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={togglePlayMusic}
              className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer"
            >
              {isPlayingMusic ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>
            <button
              onClick={nextTrack}
              className="w-7 h-7 rounded-full hover:bg-white/10 text-slate-300 flex items-center justify-center cursor-pointer"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Wallpaper Picker */}
        <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-200 mb-2">
            <span className="flex items-center gap-1.5">
              <Image className="w-3.5 h-3.5 text-sky-400" />
              Wallpaper
            </span>
            <button
              onClick={() => {
                openWindow('settings');
                toggleControlCenter(false);
              }}
              className="text-[11px] text-sky-400 hover:underline cursor-pointer"
            >
              Edit All
            </button>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {wallpapersList.map((wp) => (
              <button
                key={wp.id}
                onClick={() => setWallpaper(wp)}
                title={wp.name}
                className={`h-7 rounded-lg overflow-hidden border-2 transition-transform hover:scale-105 cursor-pointer ${
                  wallpaper.id === wp.id ? 'border-sky-400 ring-2 ring-sky-400/40' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
                style={
                  wp.type === 'image'
                    ? { backgroundImage: `url(${wp.value})`, backgroundSize: 'cover' }
                    : { background: wp.value }
                }
              />
            ))}
          </div>
        </div>

        {/* Edit Content Button */}
        <button
          onClick={() => {
            openWindow('settings');
            toggleControlCenter(false);
          }}
          className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors cursor-pointer border border-white/15"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Edit My Content & Bio</span>
        </button>
      </div>
    </div>
  );
};
