import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { DesktopIcons } from './DesktopIcons';
import { DesktopWidgets } from './DesktopWidgets';
import { WindowFrame } from './windows/WindowFrame';
import { AboutWindow } from './windows/AboutWindow';
import { ProjectsWindow } from './windows/ProjectsWindow';
import { AIChatWindow } from './windows/AIChatWindow';
import { TerminalWindow } from './windows/TerminalWindow';
import { PhotosWindow } from './windows/PhotosWindow';
import { MusicWindow } from './windows/MusicWindow';
import { ContactWindow } from './windows/ContactWindow';
import { SettingsWindow } from './windows/SettingsWindow';
import { ResumeWindow } from './windows/ResumeWindow';

export const Desktop: React.FC = () => {
  const {
    wallpaper,
    openWindows,
    toggleAppleMenu,
    toggleControlCenter,
    toggleSpotlight,
  } = usePortfolio();

  const handleDesktopClick = (e: React.MouseEvent) => {
    // Only close overlays if clicking directly on the background
    if (e.target === e.currentTarget) {
      toggleAppleMenu(false);
      toggleControlCenter(false);
      toggleSpotlight(false);
    }
  };

  return (
    <main
      onClick={handleDesktopClick}
      className="relative flex-1 w-full h-[calc(100vh-1.75rem)] overflow-hidden select-none"
      style={
        wallpaper.type === 'image'
          ? {
              backgroundImage: `url(${wallpaper.value})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : { background: wallpaper.value }
      }
    >
      {/* Subtle vignette depth */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Draggable Desktop Icons */}
      <DesktopIcons />

      {/* Live macOS Sonoma Style Desktop Widgets */}
      <DesktopWidgets />

      {/* Render Active Windows */}
      {openWindows.map((win) => {
        if (!win.isOpen || win.isMinimized) return null;

        return (
          <WindowFrame key={win.id} windowState={win}>
            {win.id === 'about' && <AboutWindow />}
            {win.id === 'projects' && <ProjectsWindow />}
            {win.id === 'aichat' && <AIChatWindow />}
            {win.id === 'terminal' && <TerminalWindow />}
            {win.id === 'photos' && <PhotosWindow />}
            {win.id === 'music' && <MusicWindow />}
            {win.id === 'contact' && <ContactWindow />}
            {win.id === 'settings' && <SettingsWindow />}
            {win.id === 'resume' && <ResumeWindow />}
          </WindowFrame>
        );
      })}
    </main>
  );
};
