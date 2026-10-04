import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Music,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Disc3,
} from 'lucide-react';

export const MusicWindow: React.FC = () => {
  const {
    audioTracks,
    currentTrackIndex,
    isPlayingMusic,
    togglePlayMusic,
    nextTrack,
    prevTrack,
    musicVolume,
    setVolume,
  } = usePortfolio();

  const currentTrack = audioTracks[currentTrackIndex];

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-2xl mx-auto flex flex-col justify-between h-full">
      {/* Top Banner */}
      <div className="flex items-center gap-4 pb-4 border-b border-white/10">
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border border-white/20 transition-transform ${
            isPlayingMusic ? 'rotate-2 scale-105' : ''
          }`}
          style={{ backgroundColor: currentTrack.waveformColor + '22' }}
        >
          <Disc3
            className={`w-12 h-12 ${
              isPlayingMusic ? 'animate-[spin_6s_linear_infinite] text-sky-400' : 'text-slate-500'
            }`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
            {isPlayingMusic ? 'Now Playing Lo-Fi Session' : 'Ambient Audio Ready'}
          </span>
          <h1 className="text-xl font-bold tracking-tight text-white truncate">
            {currentTrack.title}
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            {currentTrack.artist} · {currentTrack.album}
          </p>
        </div>
      </div>

      {/* Visualizer Waveform Bar */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>01:14</span>
          <span>{currentTrack.duration}</span>
        </div>

        {/* Dynamic Waveform Simulation */}
        <div className="flex items-end justify-between h-14 gap-1 px-1">
          {Array.from({ length: 32 }).map((_, i) => {
            const barHeight = isPlayingMusic
              ? Math.sin((i / 3) + Date.now() / 400) * 20 + 26
              : 8;
            return (
              <div
                key={i}
                className="w-1.5 rounded-full transition-all duration-150"
                style={{
                  height: `${Math.max(6, Math.min(52, barHeight))}px`,
                  backgroundColor: currentTrack.waveformColor,
                  opacity: isPlayingMusic ? 0.9 : 0.3,
                }}
              />
            );
          })}
        </div>

        {/* Audio Controls */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={prevTrack}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Previous Track"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlayMusic}
            className="w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 transition-transform active:scale-95 cursor-pointer"
            title={isPlayingMusic ? 'Pause' : 'Play'}
          >
            {isPlayingMusic ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-1" />
            )}
          </button>

          <button
            onClick={nextTrack}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Next Track"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Volume Slider */}
        <div className="flex items-center gap-3 pt-2 max-w-xs mx-auto">
          <Volume2 className="w-4 h-4 text-slate-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={musicVolume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full accent-sky-400 cursor-pointer h-1.5 bg-white/20 rounded-lg"
          />
          <span className="text-[11px] font-mono text-slate-400 w-8 text-right">
            {Math.round(musicVolume * 100)}%
          </span>
        </div>
      </div>

      {/* Track Playlist */}
      <div className="space-y-2">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Studio Playlist
        </h3>
        <div className="divide-y divide-white/5 border border-white/10 rounded-xl overflow-hidden bg-white/5">
          {audioTracks.map((track, idx) => {
            const isSelected = idx === currentTrackIndex;
            return (
              <div
                key={track.id}
                className={`p-3 flex items-center justify-between transition-colors ${
                  isSelected ? 'bg-sky-500/20 text-white' : 'hover:bg-white/5 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-xs font-mono text-slate-500 w-4">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {track.title}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {track.album}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {track.duration}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
