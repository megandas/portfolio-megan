/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { MenuBar } from './components/MenuBar';
import { Desktop } from './components/Desktop';
import { Dock } from './components/Dock';
import { SpotlightSearch } from './components/SpotlightSearch';
import { ControlCenter } from './components/ControlCenter';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-slate-950 font-sans text-slate-100 select-none">
        {/* Top macOS Menu Bar */}
        <MenuBar />

        {/* Desktop Surface with Wallpapers, Draggable Icons, Sonoma Widgets, and Windows */}
        <Desktop />

        {/* Floating macOS Dock */}
        <Dock />

        {/* Global Overlays: Spotlight & Control Center */}
        <SpotlightSearch />
        <ControlCenter />
      </div>
    </PortfolioProvider>
  );
}
