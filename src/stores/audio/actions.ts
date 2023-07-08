import { atom } from 'jotai';
import { UpdateAudioStateType } from 'src/types/atom/audio';

import { audioStateAtom } from '@/stores/audio/atoms.ts';

export const controlVolumeAtom = atom(
  (get) => get(audioStateAtom),
  (get, set, update: UpdateAudioStateType) => {
    const prevAtom = get(audioStateAtom);

    set(audioStateAtom, {
      ...prevAtom,
      ...update,
      // 소리 조절할 때, 자동으로 mute가 풀리도록 설정
      mute: false,
    });
  },
);
