import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Sliders,
  User,
  FolderKanban,
  Image,
  Volume2,
  Download,
  Upload,
  RotateCcw,
  Check,
  Plus,
  Trash2,
} from 'lucide-react';
import { Project } from '../../types';

export const SettingsWindow: React.FC = () => {
  const {
    profile,
    updateProfile,
    projects,
    updateProjects,
    wallpaper,
    wallpapersList,
    setWallpaper,
    soundEffectsEnabled,
    toggleSoundEffects,
    resetToDefaults,
    exportContentJSON,
    importContentJSON,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'appearance' | 'backup'>('profile');
  const [saveToast, setSaveToast] = useState(false);
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Profile local form state
  const [formProfile, setFormProfile] = useState(profile);

  // Sync if external profile changes
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formProfile);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleExport = () => {
    const jsonStr = exportContentJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-content-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportSubmit = () => {
    if (!importText.trim()) return;
    const success = importContentJSON(importText);
    if (success) {
      setImportStatus('Successfully imported content!');
      setFormProfile(profile);
      setTimeout(() => setImportStatus(null), 3000);
    } else {
      setImportStatus('Failed to parse JSON. Please check formatting.');
    }
  };

  const handleDeleteProject = (projId: string) => {
    const updated = projects.filter((p) => p.id !== projId);
    updateProjects(updated);
  };

  const handleAddProject = () => {
    const newProj: Project = {
      id: `project-${Date.now()}`,
      title: 'New AI/ML Project',
      subtitle: 'Brief description of model architecture & evaluation metrics',
      category: 'Agentic AI & LLMs',
      year: '2026',
      client: 'AI Lab / Hackathon',
      role: 'AI Engineer',
      metrics: ['95% Precision', 'sub-200ms Latency'],
      description: 'Overview of the project...',
      challenge: 'Describe the ML or architectural challenge...',
      solution: 'Describe the AI/ML solution...',
      highlights: ['Key pipeline milestone 1', 'Key evaluation metric 2'],
      techStack: ['Python', 'FastAPI', 'LangChain', 'Docker'],
      image: '/src/assets/images/project_pr_reviewer_1791035369586.jpg',
      featured: true,
      aiPromptContext: 'This project demonstrates high-performance AI systems engineering.',
    };
    updateProjects([newProj, ...projects]);
  };

  return (
    <div className="flex h-full flex-col sm:flex-row bg-slate-950/80">
      {/* Settings Sidebar Tabs */}
      <div className="w-full sm:w-56 sm:border-r border-white/10 p-3 flex flex-col gap-1 bg-white/5 shrink-0">
        <div className="px-3 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Customizer
        </div>

        <button
          onClick={() => setActiveTab('profile')}
          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${
            activeTab === 'profile'
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-slate-300 hover:bg-white/5'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Profile & Bio</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${
            activeTab === 'projects'
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-slate-300 hover:bg-white/5'
          }`}
        >
          <FolderKanban className="w-4 h-4" />
          <span>Projects ({projects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('appearance')}
          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${
            activeTab === 'appearance'
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-slate-300 hover:bg-white/5'
          }`}
        >
          <Image className="w-4 h-4" />
          <span>Appearance & Audio</span>
        </button>

        <button
          onClick={() => setActiveTab('backup')}
          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${
            activeTab === 'backup'
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-slate-300 hover:bg-white/5'
          }`}
        >
          <Download className="w-4 h-4" />
          <span>Export / Import</span>
        </button>

        <div className="mt-auto pt-3 border-t border-white/10">
          <button
            onClick={() => {
              if (window.confirm('Reset all content back to Megan Das resume defaults?')) {
                resetToDefaults();
                setFormProfile(profile);
              }
            }}
            className="w-full text-left px-3 py-2 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Main Settings Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
        {saveToast && (
          <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-xl p-3 text-xs text-emerald-200 flex items-center gap-2 animate-in fade-in duration-150">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Changes saved to your portfolio and synced to localStorage!</span>
          </div>
        )}

        {/* Tab 1: Profile & Bio Editor */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSaveProfile} className="space-y-5 max-w-xl">
            <div>
              <h2 className="text-base font-bold text-white">Edit Your Profile Content</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Update your name, title, photo, bio, and contact details. Takes effect across all windows & widgets.
              </p>
            </div>

            {/* Avatar Preview & Direct File Upload */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <img
                src={formProfile.avatar}
                alt={formProfile.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-white/20 shadow-md shrink-0"
              />
              <div className="space-y-1.5 min-w-0">
                <span className="text-xs font-semibold text-white block">Profile Picture</span>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Displayed on your About Me profile and window headers.
                </p>
                <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white cursor-pointer transition-colors shadow">
                  <span>Upload New Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          if (event.target?.result) {
                            setFormProfile((prev) => ({
                              ...prev,
                              avatar: event.target!.result as string,
                            }));
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formProfile.name}
                  onChange={(e) =>
                    setFormProfile({ ...formProfile, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formProfile.email}
                  onChange={(e) =>
                    setFormProfile({ ...formProfile, email: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Professional Title & Role
              </label>
              <input
                type="text"
                value={formProfile.title}
                onChange={(e) =>
                  setFormProfile({ ...formProfile, title: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Headline / Focus
              </label>
              <input
                type="text"
                value={formProfile.headline}
                onChange={(e) =>
                  setFormProfile({ ...formProfile, headline: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formProfile.location}
                  onChange={(e) =>
                    setFormProfile({ ...formProfile, location: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formProfile.phone || ''}
                  onChange={(e) =>
                    setFormProfile({ ...formProfile, phone: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  value={formProfile.socials?.linkedin || ''}
                  onChange={(e) =>
                    setFormProfile({
                      ...formProfile,
                      socials: { ...formProfile.socials, linkedin: e.target.value },
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  GitHub URL
                </label>
                <input
                  type="text"
                  value={formProfile.socials?.github || ''}
                  onChange={(e) =>
                    setFormProfile({
                      ...formProfile,
                      socials: { ...formProfile.socials, github: e.target.value },
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Bio Paragraph 1 (Overview)
              </label>
              <textarea
                rows={3}
                value={formProfile.bioParagraphs[0] || ''}
                onChange={(e) => {
                  const updated = [...formProfile.bioParagraphs];
                  updated[0] = e.target.value;
                  setFormProfile({ ...formProfile, bioParagraphs: updated });
                }}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-sky-400 leading-relaxed"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Bio Paragraph 2 (Notable achievements & leadership)
              </label>
              <textarea
                rows={3}
                value={formProfile.bioParagraphs[1] || ''}
                onChange={(e) => {
                  const updated = [...formProfile.bioParagraphs];
                  updated[1] = e.target.value;
                  setFormProfile({ ...formProfile, bioParagraphs: updated });
                }}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-sky-400 leading-relaxed"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-colors cursor-pointer shadow-lg shadow-sky-500/20"
              >
                Save Profile Changes
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Projects Manager */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h2 className="text-base font-bold text-white">Manage Case Studies</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Add, update, or remove projects. Case studies are automatically browsable in Projects and Ask AI.
                </p>
              </div>

              <button
                onClick={handleAddProject}
                className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">
                      {proj.title}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {proj.client} · {proj.category} ({proj.year})
                    </div>
                    <div className="text-[10px] text-sky-300 font-mono mt-0.5">
                      {proj.metrics.join(' | ')}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors cursor-pointer"
                      title="Delete project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Appearance & Sound */}
        {activeTab === 'appearance' && (
          <div className="space-y-6 max-w-xl">
            <div>
              <h2 className="text-base font-bold text-white">Desktop & Sound Settings</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Customize your macOS backdrop and audio feedback.
              </p>
            </div>

            {/* Wallpapers */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Desktop Wallpaper
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {wallpapersList.map((wp) => (
                  <button
                    key={wp.id}
                    onClick={() => setWallpaper(wp)}
                    className={`h-24 rounded-xl overflow-hidden border-2 transition-all p-2 flex flex-col justify-end text-left cursor-pointer group ${
                      wallpaper.id === wp.id
                        ? 'border-sky-400 ring-2 ring-sky-400/40'
                        : 'border-white/15 opacity-80 hover:opacity-100'
                    }`}
                    style={
                      wp.type === 'image'
                        ? { backgroundImage: `url(${wp.value})`, backgroundSize: 'cover' }
                        : { background: wp.value }
                    }
                  >
                    <span className="text-[11px] font-semibold text-white drop-shadow bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm truncate">
                      {wp.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sound FX */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white">
                  Audio & Sound Effects
                </div>
                <div className="text-[11px] text-slate-400">
                  Play subtle macOS click and window chime sounds.
                </div>
              </div>
              <button
                onClick={toggleSoundEffects}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                  soundEffectsEnabled ? 'bg-sky-500' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-transform ${
                    soundEffectsEnabled ? 'left-6.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Backup & JSON Export/Import */}
        {activeTab === 'backup' && (
          <div className="space-y-6 max-w-xl">
            <div>
              <h2 className="text-base font-bold text-white">Export & Import Portfolio Data</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Save a local JSON file of your entire portfolio content or paste JSON to instantly replace it with your own.
              </p>
            </div>

            {/* Export */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-white">Export Content JSON</div>
              <p className="text-xs text-slate-300">
                Download your profile, projects, and notes in one JSON payload.
              </p>
              <button
                onClick={handleExport}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer border border-white/10"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span>Download portfolio.json</span>
              </button>
            </div>

            {/* Import */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
              <div className="text-xs font-semibold text-white">Import Content JSON</div>
              <p className="text-xs text-slate-300">
                Paste your custom JSON to update all contents immediately:
              </p>
              <textarea
                rows={5}
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder='{"profile": {...}, "projects": [...], "notes": [...]}'
                className="w-full bg-black/40 border border-white/15 rounded-xl p-3 font-mono text-[11px] text-white outline-none focus:border-sky-400"
              />
              {importStatus && (
                <div className="text-xs text-sky-300 font-semibold">{importStatus}</div>
              )}
              <button
                onClick={handleImportSubmit}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Apply Imported Content</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
