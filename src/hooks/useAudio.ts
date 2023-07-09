import { useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'react';

import { audioStateAtom } from '@/stores/audio/atoms';

interface UseAudioProps {
  isBackgroundMusic: boolean;
  initAudioSrc: string | null;
}

const useAudio = ({
  isBackgroundMusic = false,
  initAudioSrc = null,
}: UseAudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioSrc, setCurrentAudioSrc] = useState<string | null>(
    initAudioSrc,
  );
  const {
    backgroundSound: { volume: backgroundVolume },
  } = useAtomValue(audioStateAtom);

  const registerSound = (audioUrl: string) => {
    setCurrentAudioSrc(audioUrl);
  };

  const removeSound = () => {
    setCurrentAudioSrc(null);
  };

  const play = () => {
    setIsPlaying(true);
  };

  const stop = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!currentAudioSrc) return;

    audioRef.current.src = currentAudioSrc;
    audioRef.current.volume = backgroundVolume;
    audioRef.current.loop = isBackgroundMusic;
  }, [audioRef, currentAudioSrc, backgroundVolume, isBackgroundMusic]);

  useEffect(() => {
    isPlaying && currentAudioSrc
      ? audioRef.current.play()
      : audioRef.current.pause();
  }, [currentAudioSrc, isPlaying]);

  return { registerSound, removeSound, play, stop };
};

export default useAudio;
