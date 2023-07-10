import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 22.5rem;
  overflow-x: auto;
  padding-left: 0.5rem;
  padding-top: 4rem;

  display: flex;
  justify-content: start;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const slide = keyframes`
  0% {
    transform: translateX(00%)
  }
  100%{
    transform: translateX(-100%)
  }
`;

export const slide2 = keyframes`
0% {
  transform: translateX(-100%)
}
  100%{
  transform: translateX(00%)
}`;

export const Carousel = styled.div`
  display: flex;
  justify-content: center;

  animation: ${slide} 20s linear infinite;
  animation-play-state: running;
`;

//끊기지않는 화면을 위한 복제 캐러셀 스타일
export const CarouselClone = styled.div`
  display: flex;
  justify-content: center;

  animation: ${slide2} 20s linear infinite reverse;
  animation-play-state: running;
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 128px;
      height: 170px;
      padding: 4px;
      margin-left: 8px;
      background-color: grey;
      border-radius: 1rem;
      box-shadow: 0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.15);

      display: flex;
      flex-direction: column;
    `;
  }}
`;

export const Image = styled.div<{ imageurl: string }>`
  ${({ theme, imageurl }) => {
    return css`
      width: 120px;
      height: 120px;

      background-image: url(${imageurl});
      background-size: cover;
      border-radius: 1rem;
      box-shadow: 0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.15);
    `;
  }}
`;

export const TitleText = styled.span`
  ${({ theme }) => {
    return css`
      font-size: 1rem;
      color: ${theme.colors.black};

      margin: 0.5rem 0;
    `;
  }}
`;

export const HashtagWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
    `;
  }}
`;

export const HashtagText = styled.span`
  ${({ theme }) => {
    return css`
      font-size: 0.5rem;
      color: ${theme.colors.black};

      margin: 0 0.625rem 0.5rem 0;
      &::before {
        content: '#';
      }
    `;
  }}
`;
