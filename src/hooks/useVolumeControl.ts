import { useAtom } from 'jotai';

import { controlVolumeAtom } from '@/stores/audio/actions.ts';

const useVolumeControl = () => {
  const [volume, setVolume] = useAtom(controlVolumeAtom);

  const onChange = ({
    backgroundVolume,
    soundEffectVolume,
  }: {
    backgroundVolume?: number;
    soundEffectVolume?: number;
  }) => {
    setVolume({
      backgroundSound: {
        volume: backgroundVolume || volume.backgroundSound.volume,
      },
      soundEffect: {
        volume: soundEffectVolume || volume.soundEffect.volume,
      },
      isMute: false,
    });
  };

  const onMute = (mute: boolean) => {
    setVolume({
      ...volume,
      isMute: mute,
    });
  };

  return { volume, onChange, onMute };
};

export default useVolumeControl;
