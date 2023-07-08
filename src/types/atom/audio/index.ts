export interface AudioStateType {
  /** 전체 사운드 음소거 여부 */
  mute: boolean;
  /** 전체 게임 중 배경음 볼륨 */
  backgroundSound: number;
  /** 전체 게임 중 효과음 볼륨 */
  soundEffect: number;
}

export type UpdateAudioStateType = Pick<
  AudioStateType,
  'backgroundSound' | 'soundEffect' | 'mute'
>;
