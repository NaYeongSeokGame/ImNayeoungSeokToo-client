import { atom } from 'jotai';
import { AudioStateType } from 'src/types/atom/audio';


export const audioStateAtom = atom<AudioStateType>({
  backgroundSoundSrc: new Audio(),
  isMute: false,
  backgroundVolume: 1,
  soundEffectVolume: 1,
});