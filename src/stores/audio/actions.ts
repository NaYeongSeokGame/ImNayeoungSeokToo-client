import { atom } from 'jotai';
import {
  SettingAudioStateType,
  UpdateAudioStateType,
} from 'src/types/atom/audio';

import { audioStateAtom } from '@/stores/audio/atoms.ts';

export const controlVolumeAtom = atom(
  (get) => {
    const {
      isMute,
      backgroundSound: { volume: backgroundVolume },
      soundEffect: { volume: soundEffectVolume },
    } = get(audioStateAtom);
    return {isMute, backgroundVolume, soundEffectVolume}
  },
  (get, set, update: UpdateAudioStateType) => {
    const prevAtom = get(audioStateAtom);

    // isMute와 volume만 조절 가능하도록 설정
    // 좋은 구조인지 의문. 논의 필요.
    set(audioStateAtom, {
      ...prevAtom,
      isMute: update.isMute,
      backgroundSound: {
        ...prevAtom.backgroundSound,
        volume: update.backgroundSound.volume,
      },
      soundEffect: {
        ...prevAtom.soundEffect,
        volume: update.soundEffect.volume,
      },
    });
  },
);

export const settingAudioAtom = atom(
  null,
  (get, set, update: SettingAudioStateType) => {
    const prevAtom = get(audioStateAtom);

    set(audioStateAtom, {
      ...prevAtom,
      backgroundSound: {
        ...prevAtom.backgroundSound,
        src: update.backgroundSound.src,
      },
      soundEffect: {
        ...prevAtom.soundEffect,
        src: update.soundEffect.src,
      },
    });
  },
);
