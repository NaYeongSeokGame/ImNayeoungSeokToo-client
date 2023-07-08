export interface AudioStateType {
  /** 재생될 배경음 */
  backgroundSoundSrc: HTMLAudioElement;
  /** 전체 사운드 음소거 여부 */
  isMute: boolean;
  /** 전체 게임 중 배경음 볼륨 */
  backgroundSound: number;
  /** 전체 게임 중 효과음 볼륨 */
  soundEffect: number;
}

export type UpdateAudioStateType = Pick<
  AudioStateType,
  'backgroundSound' | 'soundEffect' | 'isMute'
>;

export type SettingAudioStateType = Pick<AudioStateType, 'backgroundSoundSrc'>;
