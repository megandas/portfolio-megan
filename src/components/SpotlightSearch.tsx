import React, { useState, useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Search,
  FolderKanban,
  FileText,
  Terminal,
  Mail,
  User,
  Sparkles,
  Sliders,
  FileCode2,
} from 'lucide-react';
import { AppId } from '../types';

export const SpotlightSearch: React.FC = () => {
  const {
    isSpotlightOpen,
    toggleSpotlight,
    openWindow,
    projects,
    profile,
  } = usePortfolio();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSpotlightOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSpotlightOpen]);

  if (!isSpotlightOpen) return null;

  // Build searchable items
  interface SearchResult {
    id: string;
    title: string;
    category: string;
    icon: React.ReactNode;
    action: () => void;
  }

  const results: SearchResult[] = [];

  // Core apps
  results.push(
    {
      id: 'app-projects',
      title: 'Projects & Case Studies Catalog',
      category: 'Application',
      icon: <FolderKanban className="w-4 h-4 text-blue-400" />,
      action: () => openWindow('projects'),
    },
    {
      id: 'app-about',
      title: `About ${profile.name} (Bio, Experience, Philosophy)`,
      category: 'Application',
      icon: <User className="w-4 h-4 text-amber-400" />,
      action: () => openWindow('about'),
    },
    {
      id: 'app-aichat',
      title: 'Ask AI Case Study Explorer',
      category: 'AI Assistant',
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      action: () => openWindow('aichat'),
    },
    {
      id: 'app-resume',
      title: 'Resume & Work Credentials PDF',
      category: 'Document',
      icon: <FileCode2 className="w-4 h-4 text-rose-400" />,
      action: () => openWindow('resume'),
    },
    {
      id: 'app-terminal',
      title: 'Developer Terminal CLI',
      category: 'Developer Tool',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      action: () => openWindow('terminal'),
    },
    {
      id: 'app-contact',
      title: `Send Email to ${profile.name}`,
      category: 'Mail',
      icon: <Mail className="w-4 h-4 text-sky-400" />,
      action: () => openWindow('contact'),
    },
    {
      id: 'app-settings',
      title: 'Customize Content & System Settings',
      category: 'Settings',
      icon: <Sliders className="w-4 h-4 text-zinc-400" />,
      action: () => openWindow('settings'),
    }
  );

  // Dynamic projects
  projects.forEach((p) => {
    results.push({
      id: `proj-${p.id}`,
      title: `${p.title} — ${p.subtitle}`,
      category: `Case Study (${p.category})`,
      icon: <FolderKanban className="w-4 h-4 text-blue-400" />,
      action: () => openWindow('projects', { projectId: p.id }),
    });
  });

  const filtered = query.trim()
    ? results.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.category.toLowerCase().includes(query.toLowerCase())
      )
    : results.slice(0, 8);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
        toggleSpotlight(false);
      }
    } else if (e.key === 'Escape') {
      toggleSpotlight(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-28 bg-black/40 backdrop-blur-sm"
      onClick={() => toggleSpotlight(false)}
    >
      <div
        className="w-full max-w-xl mac-glass rounded-2xl border border-white/20 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Spotlight Search: type a project, skill, note, or app..."
            className="flex-1 bg-transparent text-lg text-white placeholder-slate-400 outline-none border-none font-medium"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[11px] font-mono text-slate-400 border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-400">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    toggleSpotlight(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-sky-600 text-white'
                      : 'hover:bg-white/10 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected ? 'bg-white/20' : 'bg-white/5'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium truncate">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`text-xs whitespace-nowrap ml-2 ${
                      isSelected ? 'text-sky-100' : 'text-slate-400'
                    }`}
                  >
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-white/10 bg-slate-950/40 flex items-center justify-between text-[11px] text-slate-400">
          <span>Search projects, notes, skills, or apps</span>
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
        </div>
      </div>
    </div>
  );
};
