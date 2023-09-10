import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  margin: 0 auto 8.25rem;
`;

export const OptionButton = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 12.625rem;
      height: 3rem;

      color: ${colors.darkblue950};
      font-family: ${fonts.deco1.fontFamily};
      font-size: 1rem;
      text-align: center;

      background-color: ${colors.gray100};
      border: 2px double ${colors.darkblue950};
      border-radius: 0.375rem;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      &:active {
        text-decoration: none;
      }
    `;
  }}
`;

export const Title = styled.h1`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      margin: 0 auto auto;

      font-size: 3rem;
      font-family: ${fonts.deco1.fontFamily};
      font-weight: 700;
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      background: linear-gradient(
        180deg,
        #ff5912 16.67%,
        #ffa012 48.96%,
        #ffe812 84.9%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `;
  }}
`;