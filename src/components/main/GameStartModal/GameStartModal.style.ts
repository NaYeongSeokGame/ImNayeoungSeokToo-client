import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: 1.5rem;

      display: flex;
      flex-direction: column;
      gap: 1.375rem 0;

      border-radius: 0.8rem;
      background-color: ${theme.colors.white};
      background-size: cover;
    `;
  }}
`;

export const Title = styled.p`
  ${({ theme }) => {
    return css`
      font-size: 1.125rem;
      color: ${theme.colors.black};
      text-align: center;

      margin: 0 auto 0.375rem;
    `;
  }}
`;

export const StartDelayCounter = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;

      width: 14rem;
      padding: 0.25rem 1.25rem;
      margin: 0 auto;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      font-size: 2.625rem;
      font-family: 'Pretendard';
      font-weight: 700;

      & > svg {
        margin: auto 0;
      }
    `;
  }}
`;

export const ThumbnailSection = styled.div`
  ${({ theme }) => {
    return css`
      width: 15rem;
      height: 12.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      overflow: hidden;

      & > img {
        object-fit: cover;
      }
    `;
  }}
`;

export const StartQuizButton = styled.button`
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
