export interface AudioStateType {
  /** 전체 게임 중 배경음 볼륨 */
  backgroundSound: number;
  /** 전체 게임 중 효과음 볼륨 */
  soundEffect: number;
  /** 전체 볼륨 최대값 */
  maxVolume: number;
  /** 전체 볼륨 최소값 */
  minVolume: number;
}

export type UpdateAudioStateType = Pick<
  AudioStateType,
  'backgroundSound' | 'soundEffect'
>;
