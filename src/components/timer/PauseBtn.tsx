import React from 'react';

const PauseBtn = ({ togglePause }: PauseBtnProps) => {
  return (
    <div>
      <button onClick={togglePause}>일시정지</button>
    </div>
  );
};

export default PauseBtn;

type PauseBtnProps = {
  togglePause: () => void;
};
