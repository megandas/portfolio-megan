import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Sun,
  Play,
  Pause,
  SkipForward,
  Sparkles,
  CloudSun,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const DesktopWidgets: React.FC = () => {
  const {
    profile,
    audioTracks,
    currentTrackIndex,
    isPlayingMusic,
    togglePlayMusic,
    nextTrack,
    openWindow,
  } = usePortfolio();

  const [stickyNote, setStickyNote] = useState<string>(() => {
    return (
      localStorage.getItem('megan_desktop_stickynote_v3') ||
      '🚀 Focus: Enhancing LangChain RAG retrieval speed and optimizing AutoGen Docker agent loops.'
    );
  });

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setStickyNote(val);
    try {
      localStorage.setItem('megan_desktop_stickynote_v3', val);
    } catch {
      // Ignore
    }
  };

  const currentTrack = audioTracks[currentTrackIndex];
  const today = new Date();
  const dateNum = today.getDate();
  const dayName = today.toLocaleDateString([], { weekday: 'long' });
  const monthName = today.toLocaleDateString([], { month: 'short' });

  return (
    <div className="hidden xl:flex flex-col gap-3.5 absolute top-10 right-6 w-72 pointer-events-auto z-10 select-none">
      {/* 1. Date & Academic Standing Widget */}
      <div className="mac-glass rounded-2xl p-4 border border-white/15 shadow-xl flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block">
            {dayName}
          </span>
          <span className="text-3xl font-bold tracking-tight text-white">
            {dateNum} <span className="text-lg font-normal text-slate-400">{monthName}</span>
          </span>
          <p className="text-xs text-slate-300 mt-0.5 truncate">
            {profile.title}
          </p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-500/20 to-orange-500/20 border border-rose-500/30 flex flex-col items-center justify-center text-rose-300 shadow-inner">
          <span className="text-[10px] font-mono">VIT CGPA</span>
          <span className="text-base font-bold leading-none">8.44</span>
        </div>
      </div>

      {/* 2. Weather Widget (Bangalore, India) */}
      <div className="mac-glass rounded-2xl p-4 border border-white/15 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Bangalore, India</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">26° / 19°C</span>
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">25°C</div>
            <div className="text-xs text-sky-300 font-medium">Pleasant & Breezy</div>
          </div>
          <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-300">
            <Sun className="w-6 h-6 animate-[spin_12s_linear_infinite]" />
          </div>
        </div>
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
          <span className="flex items-center gap-1">
            <CloudSun className="w-3.5 h-3.5 text-slate-400" />
            <span>Gentle Wind 8 km/h</span>
          </span>
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            AQI 42 (Good)
          </span>
        </div>
      </div>

      {/* 3. Now Playing Music Mini Widget */}
      <div className="mac-glass rounded-2xl p-3.5 border border-white/15 shadow-xl">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="font-semibold text-slate-200">Deep Code Lo-Fi</span>
          <span className="text-[11px] font-mono text-sky-400">
            {isPlayingMusic ? 'Playing' : 'Paused'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-white/20 shadow"
            style={{ backgroundColor: currentTrack.waveformColor + '33' }}
          >
            <div className="flex items-end gap-0.5 h-4">
              <span
                className={`w-1 rounded-sm bg-sky-400 ${
                  isPlayingMusic ? 'animate-pulse h-4' : 'h-1.5'
                }`}
              />
              <span
                className={`w-1 rounded-sm bg-sky-300 ${
                  isPlayingMusic ? 'animate-pulse h-2.5' : 'h-2'
                }`}
              />
              <span
                className={`w-1 rounded-sm bg-sky-400 ${
                  isPlayingMusic ? 'animate-pulse h-3.5' : 'h-1'
                }`}
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white truncate">
              {currentTrack.title}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {currentTrack.album}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={togglePlayMusic}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              title={isPlayingMusic ? 'Pause' : 'Play'}
            >
              {isPlayingMusic ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>
            <button
              onClick={nextTrack}
              className="w-7 h-7 rounded-full hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Next Track"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Desktop Sticky Note (Developer Scratchpad) */}
      <div className="bg-amber-100/90 text-slate-900 rounded-2xl p-3.5 shadow-xl border border-amber-300/40 backdrop-blur-md">
        <div className="flex items-center justify-between text-[11px] font-semibold text-amber-900/70 mb-1">
          <span>AI Research Note</span>
          <span className="text-[10px]">Autosaved</span>
        </div>
        <textarea
          value={stickyNote}
          onChange={handleNoteChange}
          rows={3}
          className="w-full bg-transparent resize-none text-xs text-amber-950 font-medium leading-relaxed outline-none border-none placeholder-amber-900/50"
          placeholder="Write technical notes..."
        />
      </div>

      {/* 5. Proven Engineering Standings */}
      <div className="mac-glass rounded-2xl p-3 border border-white/15 shadow-xl text-xs space-y-1.5">
        <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
          Proven Engineering Standings
        </div>
        <div className="flex items-center justify-between text-slate-200">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Threat Detection Precision</span>
          </span>
          <span className="font-bold text-white font-mono">95%</span>
        </div>
        <div className="flex items-center justify-between text-slate-200">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
            <span>IBM TechXchange Hackathon</span>
          </span>
          <span className="font-bold text-white font-mono">Top 50</span>
        </div>
        <div className="flex items-center justify-between text-slate-200">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
            <span>BERT Fake News Accuracy</span>
          </span>
          <span className="font-bold text-white font-mono">92%</span>
        </div>
      </div>
    </div>
  );
};
