import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      margin: 4.12rem 1.88rem 0.75rem;

      color: ${colors.white};
      font-size: 1.875rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      > span:first-of-type {
        font-size: 2.625rem;
      }

      > span {
        color: ${colors.darkblue400};
      }
    `;
  }}
`;

export const QuizGuide = styled.p`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      margin: 0 0 0.44rem 2.06rem;

      color: ${colors.white};
      font-size: 1rem;

      > span {
        color: ${colors.magenta500};
      }
    `;
  }}
`;

export const QuizTimerBar = styled.progress`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 18.125rem;
      height: 0.5625rem;
      margin: 0 2.06rem 1.69rem 2.06rem;

      appearance: none;

      &::-webkit-progress-bar {
        overflow: hidden;

        background-color: ${colors.gray400};
        border-radius: 0.5625rem;
      }

      &::-webkit-progress-value {
        background-color: ${colors.magenta500};
        border-radius: 0.5625rem;
      }
    `;
  }}
`;

// FIXME: 이미지가 figma 스펙과 다르게 나타나는 것 같아서 추후 수정 필요.
export const QuizTimerImageBox = styled.div`
  position: relative;

  > div {
    width: 5.96144rem;
    height: 5.72225rem;
    padding-top: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0.44rem;
    bottom: 0;

    font-size: 2rem;

    background-image: url('/src/assets/images/timerImage.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const QuestionImage = styled.section<{ $imageUrl: string }>`
  ${({ theme, $imageUrl: imageUrl }) => {
    const { colors } = theme;
    return css`
      width: 18.75rem;
      height: 30rem;

      margin: 0 auto 1.69rem auto;

      background: url(${imageUrl}) ${colors.white};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border: 10px solid ${colors.white};
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `;
  }}
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 0 1.875rem;
  margin: 0 auto;
`;

export const Countdown = styled.div<{ currentCount: number }>`
  ${({ theme, currentCount }) => {
    const { colors, fonts } = theme;
    return css`
      font-size: ${fonts.deco4.fontSize};
      font-family: ${fonts.deco4.fontFamily};
      color: ${currentCount < 2 ? colors.red : colors.purple};
      margin: 0 auto auto;
    `;
  }}
`;
