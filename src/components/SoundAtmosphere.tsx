import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundAtmosphere: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleSound = () => {
    if (!isPlaying) {
      startAmbientSound();
      setIsPlaying(true);
    } else {
      stopAmbientSound();
      setIsPlaying(false);
    }
  };

  const startAmbientSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Create warm pentatonic ambient chords (432Hz tuning, warm sine waves)
      const freqs = [108, 162, 216, 270, 324]; // Golden ratio harmonics
      oscillatorsRef.current = freqs.map((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle subtle detune & LFO
        const subGain = ctx.createGain();
        subGain.gain.value = 0.25 / freqs.length;

        osc.connect(subGain);
        subGain.connect(masterGain);
        osc.start();
        return osc;
      });
    } catch (e) {
      console.warn('AudioContext not supported or restricted', e);
    }
  };

  const stopAmbientSound = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
          } catch {
            // ignore
          }
        });
        oscillatorsRef.current = [];
        ctx.close();
      }, 1600);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? 'Mute luxury acoustic ambience' : 'Listen to luxury acoustic ambience'}
      aria-label="Toggle ambient luxury sound"
      className="group relative flex items-center gap-2.5 rounded-full border border-[#C8A96B]/40 bg-[#0A1915]/75 px-3.5 py-1.5 text-xs tracking-wider text-[#F2EBDD] backdrop-blur-md transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#1D493A]/60 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1915]"
    >
      {isPlaying ? (
        <>
          <Volume2 className="h-4 w-4 text-[#C8A96B] animate-pulse" />
          <span className="font-cormorant hidden text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[#D8BD83] sm:inline">
            Ambience On
          </span>
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#C8A96B] animate-ping" />
        </>
      ) : (
        <>
          <VolumeX className="h-4 w-4 text-[#D8BD83]/90 transition-colors group-hover:text-[#C8A96B]" />
          <span className="font-cormorant hidden text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[rgba(240,235,225,0.88)] group-hover:text-[#F2EBDD] sm:inline">
            Sound Off
          </span>
        </>
      )}
    </button>
  );
};
