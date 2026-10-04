// Procedural Web Audio API sound generator for authentic interactive audio feedback and ambient music

class SoundManager {
  private ctx: AudioContext | null = null;
  private currentOscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private isMusicPlaying: boolean = false;
  private musicVolume: number = 0.4;
  private isSoundEffectsEnabled: boolean = true;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setSoundEffectsEnabled(enabled: boolean) {
    this.isSoundEffectsEnabled = enabled;
  }

  public setMusicVolume(vol: number) {
    this.musicVolume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.musicVolume * 0.15, this.ctx.currentTime);
    }
  }

  // Play subtle macOS UI click / pop sound
  public playClickSound() {
    if (!this.isSoundEffectsEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // AudioContext may be restricted before user gesture
    }
  }

  // Play macOS window open chime
  public playWindowChime() {
    if (!this.isSoundEffectsEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.05); // E5
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch {
      // Ignore
    }
  }

  // Play ambient chord music loop
  public startAmbientTrack(baseFreq: number = 220) {
    this.stopAmbientTrack();
    try {
      this.initContext();
      if (!this.ctx) return;

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.musicVolume * 0.15, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);

      // Create warm harmonic chord pads
      const chords = [
        [baseFreq, baseFreq * 1.25, baseFreq * 1.5], // Major chord
        [baseFreq * 0.89, baseFreq * 1.06, baseFreq * 1.33], // Progression
        [baseFreq * 0.75, baseFreq * 0.94, baseFreq * 1.12], // Subdominant
        [baseFreq, baseFreq * 1.2, baseFreq * 1.5], // Minor transition
      ];

      let chordIdx = 0;

      const playChord = () => {
        if (!this.isMusicPlaying || !this.ctx || !this.gainNode) return;

        // Clean up previous oscillators
        this.currentOscillators.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // Ignore
          }
        });
        this.currentOscillators = [];

        const currentChord = chords[chordIdx % chords.length];
        chordIdx++;

        currentChord.forEach((freq) => {
          if (!this.ctx || !this.gainNode) return;
          const osc = this.ctx.createOscillator();
          const filter = this.ctx.createBiquadFilter();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(600, this.ctx.currentTime);

          osc.connect(filter);
          filter.connect(this.gainNode);
          osc.start();
          this.currentOscillators.push(osc);
        });
      };

      this.isMusicPlaying = true;
      playChord();
      this.intervalId = window.setInterval(playChord, 3800);
    } catch {
      // Ignore
    }
  }

  public stopAmbientTrack() {
    this.isMusicPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.currentOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore
      }
    });
    this.currentOscillators = [];
  }

  public getIsPlaying(): boolean {
    return this.isMusicPlaying;
  }
}

export const soundManager = new SoundManager();
