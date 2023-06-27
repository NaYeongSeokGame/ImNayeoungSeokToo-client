import getCloudFrontUrl from './getCloudFrontUrl';

const playAudioFile = (soundFileKey: string) => {
  const audio = new Audio(getCloudFrontUrl(soundFileKey));
  audio.volume = 0.2;
  audio.play();
};

export default playAudioFile;
