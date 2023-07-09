import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { audioStateAtom } from '@/stores/audio/atoms';

interface UseAudioProps {
  isBackgroundMusic: boolean;
  initAudioSrc: string | null;
}

const useAudio = ({
  isBackgroundMusic = false,
  initAudioSrc = null,
}: UseAudioProps) => {
  const audioRef = new Audio();
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

    audioRef.src = currentAudioSrc;
    audioRef.volume = backgroundVolume;
    audioRef.loop = isBackgroundMusic;
  }, [currentAudioSrc, backgroundVolume, isBackgroundMusic]);

  useEffect(() => {
    isPlaying && currentAudioSrc ? audioRef.play() : audioRef.pause();
  }, [currentAudioSrc, isPlaying]);

  return { registerSound, removeSound, play, stop };
};

export default useAudio;
