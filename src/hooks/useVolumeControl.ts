import { useAtom } from 'jotai';
import { UpdateAudioStateType } from 'src/types/atom/audio';

import { controlVolumeAtom } from '@/stores/audio/actions.ts';


const useVolumeControl = () => {
  const [volume, setVolume] = useAtom(controlVolumeAtom);

  const onChange = (newAudioState: UpdateAudioStateType) => {
    setVolume({
      ...newAudioState,
      // 소리 조절할 때, 자동으로 mute가 풀리도록 설정
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