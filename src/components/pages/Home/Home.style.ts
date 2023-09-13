import styled, { css } from 'styled-components';

import pdImageUrl from '@/assets/images/napd.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ButtonSection = styled.div`
  gap: 1.125rem;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 12.875rem;
      height: 3.25rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${colors.gray100};
      border: 1px solid ${colors.darkblue950};
      border-radius: 0.5rem;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      &:active {
        text-decoration: none;
      }

      &:hover {
        transform: translateY(0.0625rem);
      }
    `;
  }}
`;

export const OptionButton = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 202px;
      height: 48px;

      color: ${colors.darkblue950};
      font-family: ${fonts.deco1.fontFamily};
      font-size: 1rem;
      text-align: center;

      background-color: ${colors.gray100};
      border: 1px solid ${colors.darkblue950};
      border-radius: 0.375rem;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      &:active {
        text-decoration: none;
      }
      &:hover {
        background-color: ${colors.gray200};
      }
    `;
  }}
`;
export const TitleSection = styled(Section)`
  width: 100%;
  padding: 0.625rem;

  justify-content: flex-end;

  background: transparent url(${pdImageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
`;

export const Title = styled.h1`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      font-size: 3rem;
      font-family: ${fonts.deco1.fontFamily};
      font-weight: 700;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
