const playAudioFile = (soundFileUrl: string) => {
  const audio = new Audio(soundFileUrl);
  audio.volume = 0.2;
  audio.play();
};

export default playAudioFile;
