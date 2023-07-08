import { useAtom } from 'jotai';
import { UpdateAudioStateType } from 'src/types/atom/audio';

import { controlVolumeAtom } from '@/stores/audio/actions.ts';

const useAudioControl = () => {
  const [volume, setVolume] = useAtom(controlVolumeAtom);

  const onChange = (newAudioState: UpdateAudioStateType) => {
    setVolume(newAudioState);
  };

  const onMute = (mute: boolean) => {
    setVolume({
      ...volume,
      mute: mute,
    });
  };

  return { volume, onChange, onMute };
};

export default useAudioControl;
