import { css, styled } from 'styled-components';

export const ButtonWrapper = styled.button<{ $colorScheme: string }>`
  width: 2.75rem;
  height: 2.75rem;

  border: 0.1875rem solid;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({ theme, $colorScheme }) => {
    switch ($colorScheme) {
      case 'pink':
        return css`
          border-color: ${theme.colors.magenta600};
          background: ${theme.colors.magenta500};
          color: ${theme.colors.white};
          &:hover {
            background: ${theme.colors.magenta700};
          }
          &:active {
            background: ${theme.colors.magenta800};
          }
        `;

      case 'darkblue':
        return css`
          border-color: ${theme.colors.darkblue800};
          background: ${theme.colors.darkblue700};
          color: ${theme.colors.white};
          &:hover {
            background: ${theme.colors.darkblue800};
          }
          &:active {
            background: ${theme.colors.darkblue950};
          }
        `;
    }
  }}
`;
