import { atom } from 'jotai';
import {
  SettingAudioStateType,
  UpdateAudioStateType,
} from 'src/types/atom/audio';

import { audioStateAtom } from '@/stores/audio/atoms.ts';


export const controlVolumeAtom = atom(
  (get) => get(audioStateAtom),
  (get, set, update: UpdateAudioStateType) => {
    const prevAtom = get(audioStateAtom);

    set(audioStateAtom, {
      ...prevAtom,
      ...update,
    });
  },
);

export const settingAudioAtom = atom(
  null,
  (get, set, update: SettingAudioStateType) => {
    const prevAtom = get(audioStateAtom);

    set(audioStateAtom, {
      ...prevAtom,
      ...update,
    });
  },
);