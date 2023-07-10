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
        volume: backgroundVolume || volume.backgroundVolume,
      },
      soundEffect: {
        volume: soundEffectVolume || volume.soundEffectVolume,
      },
      isMute: false,
    });
  };

  const onMute = (mute: boolean) => {
    setVolume({
      backgroundSound: {
        volume: volume.backgroundVolume
      },
      soundEffect: {
        volume: volume.soundEffectVolume
      },
      isMute: mute,
    });
  };

  return { volume, onChange, onMute };
};

export default useVolumeControl;
