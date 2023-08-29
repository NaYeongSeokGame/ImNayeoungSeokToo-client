import { css, styled } from 'styled-components';

export const SubContentWrapper = styled.div`
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;

export const SubContentTitle = styled.div`
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

export const SubContent = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 14rem;
      margin: 0 auto;

      border: 0.0625rem double ${theme.colors.black};
      border-width: 0.1875rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 1rem;
    `;
  }}
`;
