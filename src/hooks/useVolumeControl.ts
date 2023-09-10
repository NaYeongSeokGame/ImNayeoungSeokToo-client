import { useAtom } from 'jotai';

import { controlVolumeAtom } from '@/stores/audio/actions.ts';

const useVolumeControl = () => {
  const [volume, setVolume] = useAtom(controlVolumeAtom);

  const onChange = ({
    backgroundVolume,
    soundEffectVolume,
  }: {
    backgroundVolume: number;
    soundEffectVolume: number;
  }) => {
    setVolume({
      backgroundSound: {
        volume: backgroundVolume,
      },
      soundEffect: {
        volume: soundEffectVolume,
      },
      isMute: false,
    });
  };

  const onMute = (mute: boolean) => {
    setVolume({
      backgroundSound: {
        volume: mute ? 0 : volume.backgroundVolume,
      },
      soundEffect: {
        volume: mute ? 0 : volume.soundEffectVolume,
      },
      isMute: mute,
    });
  };

  return { volume, onChange, onMute };
};

export default useVolumeControl;
