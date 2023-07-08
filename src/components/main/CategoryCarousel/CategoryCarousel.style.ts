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
    margin-left:0%;
    transform: translateX(00%)
  }
  50% {
    margin-right:0%;
    transform: translateX(-50%) //Fix: 캐러셀 갯수에 맞게 조정 필요
  }
  100%{
    margin-left:0%;
    transform: translateX(00%)
  }
`
export const Carousel = styled.div`
  width: 90rem;

  display: flex;
  justify-content: center;
  gap: 0 0.5rem;
  
  animation:  ${slide} 10s linear infinite;
  animation-play-state: running;
  &:hover{  
    animation-play-state: paused;
  }
`;


export const ImageWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 128px;
      height: 170px;

      padding-top: 8px;
      padding-left: 8px;
      background-color: grey;
      border-radius: 1rem;
      box-shadow: 0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.15);

      display: flex;
      flex-direction: column;
    `;
  }}
`;

export const Image = styled.div<{ imageUrl: string }>`
  ${({ theme, imageUrl }) => {
    return css`
      width: 110px;
      height: 110px;

      background-image: url(${imageUrl});
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

      margin: 0.5rem 0 ;
    `;
  }}
`;

export const HashtagText = styled.span`
  ${({ theme }) => {
    return css`
      font-size: 0.5rem;
      color: ${theme.colors.black};

      margin: 0 0.625rem 0.5rem 0;
    `;
  }}
`;

