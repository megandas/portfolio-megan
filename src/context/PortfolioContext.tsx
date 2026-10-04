import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import {
  AppId,
  AudioTrack,
  ExperienceItem,
  GalleryItem,
  NoteItem,
  ProfileData,
  Project,
  WallpaperOption,
  WindowState,
} from '../types';
import {
  DEFAULT_AUDIO_TRACKS,
  DEFAULT_EXPERIENCE,
  DEFAULT_GALLERY,
  DEFAULT_NOTES,
  DEFAULT_PROFILE,
  DEFAULT_PROJECTS,
  WALLPAPERS,
} from '../data/defaultContent';
import { soundManager } from '../utils/audioSynth';

interface PortfolioContextType {
  profile: ProfileData;
  projects: Project[];
  experience: ExperienceItem[];
  notes: NoteItem[];
  gallery: GalleryItem[];
  audioTracks: AudioTrack[];
  currentTrackIndex: number;
  isPlayingMusic: boolean;
  musicVolume: number;
  soundEffectsEnabled: boolean;
  wallpaper: WallpaperOption;
  wallpapersList: WallpaperOption[];
  openWindows: WindowState[];
  activeWindowId: AppId | null;
  isControlCenterOpen: boolean;
  isSpotlightOpen: boolean;
  isAppleMenuOpen: boolean;
  selectedProjectId: string | null;
  openWindow: (id: AppId, options?: { tab?: string; projectId?: string }) => void;
  closeWindow: (id: AppId) => void;
  minimizeWindow: (id: AppId) => void;
  maximizeWindow: (id: AppId) => void;
  focusWindow: (id: AppId) => void;
  updateWindowPosition: (id: AppId, pos: { x: number; y: number }) => void;
  updateWindowSize: (id: AppId, size: { width: number; height: number }) => void;
  setWallpaper: (wp: WallpaperOption) => void;
  togglePlayMusic: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (vol: number) => void;
  toggleSoundEffects: () => void;
  toggleControlCenter: (force?: boolean) => void;
  toggleSpotlight: (force?: boolean) => void;
  toggleAppleMenu: (force?: boolean) => void;
  setSelectedProjectId: (id: string | null) => void;
  updateProfile: (updated: Partial<ProfileData>) => void;
  updateProjects: (updated: Project[]) => void;
  updateNotes: (updated: NoteItem[]) => void;
  resetToDefaults: () => void;
  exportContentJSON: () => string;
  importContentJSON: (jsonStr: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const INITIAL_WINDOWS: WindowState[] = [
  {
    id: 'about',
    title: 'About Megan Das',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    position: { x: 72, y: 56 },
    size: { width: 780, height: 540 },
  },
  {
    id: 'projects',
    title: 'Selected Projects & Case Studies',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    zIndex: 11,
    position: { x: 260, y: 110 },
    size: { width: 880, height: 580 },
  },
  {
    id: 'aichat',
    title: 'Ask Megan AI — Multi-Agent & ML Assistant',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 9,
    position: { x: 380, y: 90 },
    size: { width: 720, height: 560 },
  },
  {
    id: 'terminal',
    title: 'Terminal — megan@macbook',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 7,
    position: { x: 220, y: 130 },
    size: { width: 680, height: 440 },
  },
  {
    id: 'photos',
    title: 'AI & Engineering Vault',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 6,
    position: { x: 200, y: 100 },
    size: { width: 760, height: 520 },
  },
  {
    id: 'music',
    title: 'Studio Audio Player',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 5,
    position: { x: 320, y: 140 },
    size: { width: 660, height: 460 },
  },
  {
    id: 'contact',
    title: 'Mail — Contact & Inquiries',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 4,
    position: { x: 340, y: 110 },
    size: { width: 680, height: 520 },
  },
  {
    id: 'settings',
    title: 'System Settings & Content Customizer',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 3,
    position: { x: 190, y: 70 },
    size: { width: 820, height: 580 },
  },
  {
    id: 'resume',
    title: 'Resume — Megan Das.pdf',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 2,
    position: { x: 280, y: 60 },
    size: { width: 760, height: 600 },
  },
];

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Local storage loaded state with fallbacks
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('megan_das_profile_v6');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          avatar:
            parsed.avatar && !parsed.avatar.includes('avatar_product_designer')
              ? parsed.avatar
              : DEFAULT_PROFILE.avatar,
          socials: {
            ...parsed.socials,
            linkedin:
              parsed.socials?.linkedin && parsed.socials.linkedin !== 'https://linkedin.com'
                ? parsed.socials.linkedin
                : DEFAULT_PROFILE.socials.linkedin,
            github:
              parsed.socials?.github && parsed.socials.github !== 'https://github.com'
                ? parsed.socials.github
                : DEFAULT_PROFILE.socials.github,
          },
        };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_PROFILE;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('megan_das_projects_v5');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return DEFAULT_PROJECTS;
  });

  const [notes, setNotes] = useState<NoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('megan_das_notes_v5');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return DEFAULT_NOTES;
  });

  const [experience] = useState<ExperienceItem[]>(DEFAULT_EXPERIENCE);
  const [gallery] = useState<GalleryItem[]>(DEFAULT_GALLERY);
  const [audioTracks] = useState<AudioTrack[]>(DEFAULT_AUDIO_TRACKS);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [musicVolume, setMusicVolumeState] = useState(0.4);
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);
  const [wallpaper, setWallpaperState] = useState<WallpaperOption>(WALLPAPERS[0]);
  const [openWindows, setOpenWindows] = useState<WindowState[]>(INITIAL_WINDOWS);
  const [activeWindowId, setActiveWindowId] = useState<AppId | null>('projects');
  const [maxZIndex, setMaxZIndex] = useState(15);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('megan_das_profile_v6', JSON.stringify(profile));
    } catch {
      // Ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('megan_das_projects_v5', JSON.stringify(projects));
    } catch {
      // Ignore
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('megan_das_notes_v5', JSON.stringify(notes));
    } catch {
      // Ignore
    }
  }, [notes]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K for Spotlight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSpotlightOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSpotlightOpen(false);
        setIsControlCenterOpen(false);
        setIsAppleMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const focusWindow = useCallback((id: AppId) => {
    soundManager.playClickSound();
    setMaxZIndex((prev) => {
      const nextZ = prev + 1;
      setOpenWindows((windows) =>
        windows.map((win) =>
          win.id === id
            ? { ...win, zIndex: nextZ, isMinimized: false }
            : win
        )
      );
      setActiveWindowId(id);
      return nextZ;
    });
  }, []);

  const openWindow = useCallback(
    (id: AppId, options?: { tab?: string; projectId?: string }) => {
      soundManager.playWindowChime();
      if (options?.projectId) {
        setSelectedProjectId(options.projectId);
      }
      setMaxZIndex((prev) => {
        const nextZ = prev + 1;
        setOpenWindows((windows) => {
          const exists = windows.find((w) => w.id === id);
          if (!exists) return windows;
          return windows.map((w) =>
            w.id === id
              ? {
                  ...w,
                  isOpen: true,
                  isMinimized: false,
                  zIndex: nextZ,
                  activeTab: options?.tab ?? w.activeTab,
                }
              : w
          );
        });
        setActiveWindowId(id);
        return nextZ;
      });
    },
    []
  );

  const closeWindow = useCallback((id: AppId) => {
    soundManager.playClickSound();
    setOpenWindows((windows) =>
      windows.map((win) => (win.id === id ? { ...win, isOpen: false } : win))
    );
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  const minimizeWindow = useCallback((id: AppId) => {
    soundManager.playClickSound();
    setOpenWindows((windows) =>
      windows.map((win) => (win.id === id ? { ...win, isMinimized: true } : win))
    );
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  const maximizeWindow = useCallback((id: AppId) => {
    soundManager.playClickSound();
    setOpenWindows((windows) =>
      windows.map((win) =>
        win.id === id ? { ...win, isMaximized: !win.isMaximized } : win
      )
    );
  }, []);

  const updateWindowPosition = useCallback((id: AppId, pos: { x: number; y: number }) => {
    setOpenWindows((windows) =>
      windows.map((win) => (win.id === id ? { ...win, position: pos } : win))
    );
  }, []);

  const updateWindowSize = useCallback((id: AppId, size: { width: number; height: number }) => {
    setOpenWindows((windows) =>
      windows.map((win) => (win.id === id ? { ...win, size } : win))
    );
  }, []);

  const setWallpaper = (wp: WallpaperOption) => {
    setWallpaperState(wp);
  };

  const togglePlayMusic = () => {
    if (isPlayingMusic) {
      soundManager.stopAmbientTrack();
      setIsPlayingMusic(false);
    } else {
      const track = audioTracks[currentTrackIndex];
      soundManager.startAmbientTrack(track?.frequency || 220);
      setIsPlayingMusic(true);
    }
  };

  const nextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % audioTracks.length;
    setCurrentTrackIndex(nextIdx);
    if (isPlayingMusic) {
      soundManager.startAmbientTrack(audioTracks[nextIdx].frequency);
    }
  };

  const prevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + audioTracks.length) % audioTracks.length;
    setCurrentTrackIndex(prevIdx);
    if (isPlayingMusic) {
      soundManager.startAmbientTrack(audioTracks[prevIdx].frequency);
    }
  };

  const setVolume = (vol: number) => {
    setMusicVolumeState(vol);
    soundManager.setMusicVolume(vol);
  };

  const toggleSoundEffects = () => {
    setSoundEffectsEnabled((prev) => {
      const next = !prev;
      soundManager.setSoundEffectsEnabled(next);
      return next;
    });
  };

  const toggleControlCenter = (force?: boolean) => {
    setIsControlCenterOpen((prev) => (force !== undefined ? force : !prev));
    if (!isControlCenterOpen) {
      setIsAppleMenuOpen(false);
      setIsSpotlightOpen(false);
    }
  };

  const toggleSpotlight = (force?: boolean) => {
    setIsSpotlightOpen((prev) => (force !== undefined ? force : !prev));
    if (!isSpotlightOpen) {
      setIsAppleMenuOpen(false);
      setIsControlCenterOpen(false);
    }
  };

  const toggleAppleMenu = (force?: boolean) => {
    setIsAppleMenuOpen((prev) => (force !== undefined ? force : !prev));
    if (!isAppleMenuOpen) {
      setIsControlCenterOpen(false);
      setIsSpotlightOpen(false);
    }
  };

  const updateProfile = (updated: Partial<ProfileData>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const updateProjects = (updated: Project[]) => {
    setProjects(updated);
  };

  const updateNotes = (updated: NoteItem[]) => {
    setNotes(updated);
  };

  const resetToDefaults = () => {
    setProfile(DEFAULT_PROFILE);
    setProjects(DEFAULT_PROJECTS);
    setNotes(DEFAULT_NOTES);
    setWallpaperState(WALLPAPERS[0]);
    localStorage.removeItem('megan_das_profile_v5');
    localStorage.removeItem('megan_das_projects_v5');
    localStorage.removeItem('megan_das_notes_v5');
  };

  const exportContentJSON = (): string => {
    return JSON.stringify({ profile, projects, notes }, null, 2);
  };

  const importContentJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.profile) setProfile(parsed.profile);
      if (parsed.projects && Array.isArray(parsed.projects)) setProjects(parsed.projects);
      if (parsed.notes && Array.isArray(parsed.notes)) setNotes(parsed.notes);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        projects,
        experience,
        notes,
        gallery,
        audioTracks,
        currentTrackIndex,
        isPlayingMusic,
        musicVolume,
        soundEffectsEnabled,
        wallpaper,
        wallpapersList: WALLPAPERS,
        openWindows,
        activeWindowId,
        isControlCenterOpen,
        isSpotlightOpen,
        isAppleMenuOpen,
        selectedProjectId,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        updateWindowPosition,
        updateWindowSize,
        setWallpaper,
        togglePlayMusic,
        nextTrack,
        prevTrack,
        setVolume,
        toggleSoundEffects,
        toggleControlCenter,
        toggleSpotlight,
        toggleAppleMenu,
        setSelectedProjectId,
        updateProfile,
        updateProjects,
        updateNotes,
        resetToDefaults,
        exportContentJSON,
        importContentJSON,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
