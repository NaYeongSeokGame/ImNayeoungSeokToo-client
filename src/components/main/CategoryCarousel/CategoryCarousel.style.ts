import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 22.5rem;
  overflow-x: auto;
  margin-left: 0.5rem;

  display: flex;
  justify-content: start;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Carousel = styled.div`
  width: 90rem;

  display: flex;
  justify-content: center;
  gap: 0 0.5rem;
`;

export const Image = styled.div<{ imageUrl: string; isSelected: boolean }>`
  ${({ theme, imageUrl, isSelected }) => {
    return css`
      width: 120px;
      height: 120px;

      background-image: url(${imageUrl}) ${isSelected && 'lightgray 50%'};
      background-size: cover;
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;
      box-shadow: 0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.15);

      display: flex;
      flex-direction: column-reverse;
    `;
  }}
`;

export const CategoryText = styled.span`
  ${({ theme }) => {
    return css`
      font-size: 1rem;
      color: ${theme.colors.black};
      text-align: right;

      margin: 0 0.625rem 0.5rem 0;
    `;
  }}
`;
