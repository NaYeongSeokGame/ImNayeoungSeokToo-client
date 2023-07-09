export interface AudioStateType {
  /** 전체 사운드 음소거 여부 */
  isMute: boolean;
  /** 게임 전체 배경음에 대한 상태 정보 */
  backgroundSound: BackgroundSoundType;
  /** 게임 전체 효과음에 대한 상태 정보 */
  soundEffect: SoundEffectType;
}

type AudioPlayStateType = {
  /** 재생될 소리의 볼륨값 */
  volume: number;
  /** 재생되는 소리가 루프되는지 여부 */
  isLoop: boolean;
};

type BackgroundSoundType = {
  /** 재생될 배경음 주소 */
  src: string;
} & AudioPlayStateType;

type SoundEffectType = {
  /** 재생될 효과음 주소 */
  src: string;
} & AudioPlayStateType;

export type UpdateAudioStateType = {
  backgroundSound: Pick<BackgroundSoundType, 'volume'>;
  soundEffect: Pick<SoundEffectType, 'volume'>;
} & Pick<AudioStateType, 'isMute'>;

export type SettingAudioStateType = {
  backgroundSound: Pick<BackgroundSoundType, 'src'>;
  soundEffect: Pick<SoundEffectType, 'src'>;
};
