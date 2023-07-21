import styled, { css } from 'styled-components';

export const Toggle = styled.input<{ $onColor: string }>`
  ${({ theme, $onColor }) => {
    return css`
      display: none;
      &:checked + ${Switch} {
        background: ${$onColor};

        &:before {
          transform: translate(40px, -50%);
        }
      }
    `;
  }}
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.25rem;
`;

export const Switch = styled.div<{ $offColor: string; $circleColor: string }>`
  ${({ $offColor, $circleColor }) => {
    return css`
      position: relative;
      width: 64px;
      height: 24px;
      background: ${$offColor};
      border-radius: 12px;
      transition: 300ms all;

      &:before {
        transition: 300ms all;
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        top: 50%;
        left: 2px;
        background:  ${$circleColor};
        transform: translate(0, -50%);
      }
    `;
  }}
`;
