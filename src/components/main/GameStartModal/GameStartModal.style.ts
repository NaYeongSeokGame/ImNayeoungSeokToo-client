import styled, { css } from 'styled-components';

export const Title = styled.span`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.375rem 0rem;

      color: ${theme.colors.darkblue300};
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      font-family: ${theme.fonts.deco3.fontFamily};
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      background: rgba(0, 0, 0, 0.6);
    `;
  }};
`;

export const SubSectionTitle = styled.p`
  ${({ theme }) => {
    return css`
      margin: 0 auto;

      font-family: ${theme.fonts.deco3.fontFamily};
      font-size: ${theme.fonts.deco3.fontSize};
      font-weight: ${theme.fonts.deco3.fontWeight};

      color: ${theme.colors.black};
      text-align: center;
    `;
  }}
`;

export const StartDelayCounter = styled.div`
  ${({ theme }) => {
    return css`
      width: 14rem;
      padding: 0.25rem 1.25rem;
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 2.625rem;
      font-family: ${theme.fonts.deco3.fontFamily};
      font-weight: 700;
      color: ${theme.colors.darkblue800};

      & > svg {
        margin: auto 0;
      }
    `;
  }}
`;

export const ThumbnailSection = styled.div<{ $thumbnailUrl: string }>`
  ${({ theme, $thumbnailUrl }) => {
    return css`
      width: 100%;
      height: 13rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      background-color: ${theme.colors.white};
      background: ${$thumbnailUrl
        ? `url(${$thumbnailUrl})`
        : theme.colors.gray800};
      background-size: cover;

      overflow: hidden;
    `;
  }}
`;

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 18.75rem;
      margin: auto;
      padding: 1.8125rem 1.375rem;
      gap: 1.625rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: ${theme.colors.gray100};
      box-shadow: 0px 0px 5px rgba(165, 165, 165, 0.25);
      border-radius: 4px 4px 48px 4px;
      border: 1px double ${theme.colors.black};
      border-width: 0.1875rem;
    `;
  }}
`;

export const Header = styled.span`
  ${({ theme }) => {
    return css`
      margin: auto auto 0.875rem auto;
      padding: 0.5rem 3rem;

      font-size: 1.125rem;

      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;
    `;
  }}
`;

export const SectionWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      margin: 0 auto;

      border: 1px double ${theme.colors.black};
      border-width: 0.1875rem;
      border-radius: 6px 6px 16px 6px;
      background-color: ${theme.colors.gray200};
    `;
  }}
`;

export const Section = styled.section`
  ${({ theme }) => {
    return css`
      margin: 0 auto;
      padding: 0.5625rem 1.625rem;

      border-radius: 4px 4px 12px 4px;
      background-color: ${theme.colors.dark};
    `;
  }}
`;

export const Article = styled.article`
  ${({ theme }) => {
    return css`
      width: 100%;

      color: ${theme.colors.darkblue900};
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      background-color: ${theme.colors.gray100};
      overflow: hidden;
    `;
  }}
`;

export const Button = styled.div`
  margin: 1.25rem auto auto;
`;

export const ButtonSection = styled.div`
  ${({ theme }) => {
    return css`
      width: 7.75rem;
      height: 3.5rem;
      gap: 1.5rem;

      display: inline-flex;
      align-self: flex-end;
      justify-content: center;
      align-items: center;

      background-color: ${theme.colors.cremewhite};
      border-radius: 50px;
      border: 1px double ${theme.colors.black};
      border-width: 0.1875rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      transform: rotate(-30deg);

      button {
        font-size: 0.75rem;
        width: 3rem;
        height: 3rem;
      }
    `;
  }}
`;

export const TimerButton = styled.button`
  ${({ theme }) => {
    return css`
      width: 3rem;
      height: 3rem;
      gap: 10px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;

      border: 4px solid ${theme.colors.gray400};
      border-radius: 50px;
      background: ${theme.colors.gray100};
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
    `;
  }};
`;
