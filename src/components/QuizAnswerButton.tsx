import { useState } from 'react';
import styled from 'styled-components';

import QuizAnswer from './QuizAnswer';

// import QuizResult from './QuizListResult';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const QuizImg = styled.div`
  width: 18.75rem;
  height: 23rem;
  flex-shrink: 0;
  border-radius: 20px;
  border: 5px solid #000;
  background: #fff;
  box-shadow: 1px 4px 2px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;
  margin-left: 0.94rem;
  margin-right: 0.94rem;
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  background-color: white;
  border: 5px solid black;
  border-radius: 20px;
`;

const QuizAnswerButton = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isAnswerButtonClicked, setIsAnswerButtonClicked] =
    useState<boolean>(false);
  const [isMomentAnswerButtonClicked, setIsMomentAnswerButtonClicked] =
    useState<boolean>(false);

  const preset: Preset = {
    presetPin: 232323,
    isPrivate: false,
    title: '테스트 프리셋',
    quizList: [
      {
        imageUrl: '',
        answer: '안유진',
      },
      {
        imageUrl: '',
        answer: '이은지',
      },
      {
        imageUrl: '',
        answer: '미미',
      },
      {
        imageUrl: '',
        answer: '이영지',
      },
    ],
  };

  const handleAnswerButtonClick = (): void => {
    setIsAnswerButtonClicked(true);
  };

  const handleMomentAnswerButtonClick = (): void => {
    setIsMomentAnswerButtonClicked(true);
  };

  const handleHomeButtonClick = (): void => {
    alert('홈으로 이동');
    setIndex(0);
    setScore(0);
    setIsAnswerButtonClicked(false);
  };

  if (isAnswerButtonClicked || isMomentAnswerButtonClicked) {
    return (
      <QuizAnswer
        index={index}
        setIndex={setIndex}
        setIsAnswerButtonClicked={setIsAnswerButtonClicked}
        setScore={setScore}
        preset={preset}
        isMomentAnswerButtonClicked={isMomentAnswerButtonClicked}
        setIsMomentAnswerButtonClicked={setIsMomentAnswerButtonClicked}
      />
    );
  }

  // if (index === preset.quizList.length) {
  //   return (
  //     <QuizResult
  //       score={score}
  //       totalQuiz={preset.quizList.length}
  //       handleHomeButtonClick={handleHomeButtonClick}
  //     />
  //   );
  // }

  return (
    <Container>
      <h1>문제 {index + 1}</h1>
      <QuizImg>image {index + 1}</QuizImg>
      <ButtonContainer>
        <Button onClick={handleMomentAnswerButtonClick}>
          <svg
            width="22"
            height="34"
            viewBox="0 0 26 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_29_6)">
              <path
                d="M7.07498 19.4621C7.0274 19.2084 6.99567 18.8832 6.99567 18.4946C6.99567 18.106 7.03533 17.6857 7.10671 17.2415C7.18601 16.7974 7.31291 16.3454 7.50324 15.8933C7.69358 15.4333 7.9553 14.9892 8.28046 14.5609C9.16871 13.4665 10.3266 12.491 11.7462 11.6265C12.1745 11.3965 12.5234 11.1348 12.7931 10.8255C13.0627 10.5242 13.1896 10.088 13.1896 9.53281C13.1896 9.10454 13.0944 8.8349 12.9041 8.7318C12.7138 8.6287 12.4441 8.58111 12.0872 8.58111C11.3497 8.58111 10.9452 8.938 10.8659 9.64384C10.7866 10.0007 10.628 10.3576 10.3742 10.7066C10.1204 11.0634 9.78731 11.3886 9.36698 11.6741C8.94665 11.9676 8.44701 12.2055 7.86013 12.3958C7.27325 12.5862 6.63086 12.6813 5.91709 12.6813C5.02884 12.6813 4.27541 12.5624 3.64888 12.3165C3.03028 12.0786 2.52271 11.7534 2.12617 11.349C1.72963 10.9445 1.44412 10.4766 1.26965 9.93728C1.09517 9.39798 1 8.8349 1 8.22423C1 7.00288 1.26172 5.89257 1.77722 4.89329C2.30065 3.89402 3.03821 3.02956 4.00577 2.30786C4.97332 1.58616 6.13915 1.02307 7.51118 0.610671C8.8832 0.2062 10.4297 0 12.1586 0C14.0382 0 15.664 0.2062 17.0281 0.610671C18.4001 1.01514 19.5263 1.57823 20.4146 2.30786C21.3028 3.03749 21.9531 3.89402 22.3735 4.89329C22.7938 5.89257 23 7.00288 23 8.22423C23 11.3727 22.0721 13.7441 20.2242 15.3461C20.018 15.5205 19.7801 15.7188 19.5025 15.9329C19.2249 16.1471 18.9474 16.3612 18.6857 16.5833C18.416 16.7974 18.1702 17.0036 17.9402 17.1939C17.7102 17.3843 17.5436 17.5429 17.4485 17.6698C17.3691 17.7491 17.2898 17.8681 17.2026 18.0346C17.1154 18.2012 17.0202 18.3677 16.9171 18.5501C16.814 18.7246 16.7267 18.8991 16.6474 19.0656C16.5681 19.2322 16.5205 19.367 16.4968 19.4621C16.1399 20.398 15.5847 21.1435 14.8234 21.6907C14.062 22.2379 13.0231 22.5076 11.6986 22.5076C10.3742 22.5076 9.32732 22.2221 8.54218 21.651C7.75703 21.08 7.25739 20.3504 7.05912 19.4621H7.07498ZM6.73396 29.4708C6.73396 27.8688 7.19394 26.5999 8.12185 25.664C9.04975 24.7282 10.2632 24.2523 11.7541 24.2523C13.3244 24.2523 14.5696 24.7203 15.4816 25.664C16.3937 26.5999 16.8536 27.8688 16.8536 29.4708C16.8536 30.1291 16.7267 30.7318 16.473 31.279C16.2192 31.8262 15.8623 32.3021 15.4102 32.7066C14.9503 33.111 14.411 33.4283 13.7924 33.6583C13.1738 33.8882 12.4917 33.9993 11.7541 33.9993C11.0166 33.9993 10.3425 33.8882 9.73973 33.6583C9.12906 33.4283 8.60562 33.111 8.1615 32.7066C7.71738 32.3021 7.36842 31.8262 7.11464 31.279C6.86085 30.7318 6.73396 30.1291 6.73396 29.4708Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_29_6"
                x="0"
                y="0"
                width="26"
                height="37.9993"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_29_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_29_6"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Button>
        <Button>
          <svg
            width="28"
            height="32"
            viewBox="0 0 32 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_24_448)">
              <rect x="1" width="10" height="32" fill="black" />
            </g>
            <g filter="url(#filter1_d_24_448)">
              <rect x="19" width="10" height="32" fill="black" />
            </g>
            <defs>
              <filter
                id="filter0_d_24_448"
                x="0"
                y="0"
                width="14"
                height="36"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_24_448"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_24_448"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_24_448"
                x="18"
                y="0"
                width="14"
                height="36"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_24_448"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_24_448"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Button>
        <Button onClick={handleAnswerButtonClick}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_24_450)">
              <rect x="1" width="32" height="32" fill="black" />
            </g>
            <defs>
              <filter
                id="filter0_d_24_450"
                x="0"
                y="0"
                width="36"
                height="36"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_24_450"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_24_450"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default QuizAnswerButton;
