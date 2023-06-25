import { HTMLAttributes, useContext, useRef } from 'react';
import { css, styled } from 'styled-components';

import QuizTimerButton from '@/components/QuizTimerButton';
import { DefaultButtonStyle, MediumText, SmallText2 } from '@/styles/Common';
import { ChangedQuizTimer } from '@/types/quiz';
import { QuizSetStateContext } from '@/utils/QuizContext';

interface QuizPresetProps {
  title: string;
  imgUrl: string;
}

const QuizPreset = ({ title, imgUrl }: QuizPresetProps) => {
  const { setTimer } = useContext(QuizSetStateContext);
  const timerRef = useRef<ChangedQuizTimer>(null);
  const onStartQuiz = () => {
    timerRef.current && setTimer && setTimer(timerRef.current.getTimer());
    // TODO: 시작 페이지로 이동
  };

  return (
    <VStack style={{ gap: '36px' }}>
      <QuizPresetContainer>
        <VStack
          style={{ padding: '20px 40px', background: 'white' }}
          isBox={true}
        >
          <SmallText2>{title ?? '퀴즈 이름'}</SmallText2>
        </VStack>
        <VStack
          style={{ padding: '20px 30px', gap: '22px', background: 'white' }}
          isBox={true}
        >
          <VStack style={{ gap: '8px' }}>
            <SmallText2>메인 이미지</SmallText2>
            <QuizThumbnail
              src={imgUrl ? imgUrl : '/images/napd.jpeg'}
              alt="인물 퀴즈 메인 이미지"
            />
          </VStack>
          <VStack style={{ gap: '8px' }}>
            <SmallText2>타이머 설정</SmallText2>
            <QuizTimerButton ref={timerRef} />
          </VStack>
        </VStack>
      </QuizPresetContainer>
      <StartButton onClick={onStartQuiz}>
        <MediumText>시작</MediumText>
      </StartButton>
    </VStack>
  );
};

export default QuizPreset;

const BoxStyle = css`
  border-radius: 20px;
  border: 5px solid black;
`;

const VStack = styled.div<HTMLAttributes<HTMLDivElement> & { isBox?: boolean }>`
  ${(props) => props.isBox && BoxStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuizPresetContainer = styled(VStack)`
  gap: 14px;
  background-color: transparent;
`;
const QuizThumbnail = styled.img`
  ${BoxStyle}
  width: 240px;
  height: 200px;
`;

const StartButton = styled.button`
  ${DefaultButtonStyle}
  ${BoxStyle}
  color: #7443FF;
  padding: 9px 50px;
  background: white;
`;
