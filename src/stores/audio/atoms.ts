import { atom } from 'jotai';
import { AudioStateType } from 'src/types/atom/audio';

export const audioStateAtom = atom<AudioStateType>({
  backgroundSound: 1,
  soundEffect: 1,
  maxVolume: 1,
  minVolume: 0,
});