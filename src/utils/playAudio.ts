const playAudioFile = (soundFileUrl: string, volume: number) => {
  const audio = new Audio(soundFileUrl);
  audio.volume = Math.round((volume / 100) * 100) / 100;
  audio.play();
};

export default playAudioFile;
