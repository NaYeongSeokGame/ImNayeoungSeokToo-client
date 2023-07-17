import styled, { css } from 'styled-components';

export const Title = styled.h1`
  display: -webkit-box;
  width: 12.5rem;
  margin: 4.25rem 5rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  background: linear-gradient(
    180deg,
    #ff5912 16.67%,
    #ffa012 48.96%,
    #ffe812 84.9%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-size: 5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const QuestionResult = styled.section`
  ${({ theme }) => {
    return css`
      width: 18.75rem;
      height: 23rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      margin: 0 auto;
      padding: 0.625rem;
      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
    `;
  }}
`;

export const Result = styled.h5`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.black};
      text-align: center;
      font-size: 6rem;
      margin: auto;
    `;
  }}
`;
export const ResultCorrect = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.purple};
    `;
  }}
`;

export const LobbyButton = styled.button`
  ${({ theme }) => {
    return css`
      font-family: 'LOTTERIADDAG';
      font-size: 1.125rem;
      color: ${theme.colors.purple};

      padding: 0.5rem 3rem;
      margin: auto auto 0.875rem auto;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;
    `;
  }}
`;

export const ShareIcon = styled.button`
  ${({ theme }) => {
    return css`
      width: 2.75rem;
      height: 2.75rem;

      fill: url('../../../assets/icons/twitterIcon.svg'),
        lightgray -4.251px -3.52px / 119.322% 119.322% no-repeat;
    `;
  }}
`;
