import { atom } from 'jotai';
import { AudioStateType } from 'src/types/atom/audio';

export const audioStateAtom = atom<AudioStateType>({
  backgroundSoundSrc: new Audio(),
  isMute: false,
  backgroundSound: 1,
  soundEffect: 1,
});
