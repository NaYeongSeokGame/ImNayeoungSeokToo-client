import { atom } from 'jotai';

import { AudioStateType } from '@/types/atom/audio';

export const audioStateAtom = atom<AudioStateType>({
  isMute: false,
  soundEffect: {
    src: '',
    volume: 100,
    isLoop: false,
  },
  backgroundSound: {
    src: '',
    volume: 100,
    isLoop: true,
  },
});
