import styled, { css } from 'styled-components';

export const Toggle = styled.input<{ $onColor: string }>`
  ${({ $onColor }) => {
    return css`
      display: none;
      &:checked + ${Switch} {
        background: ${$onColor};

        &:before {
          transform: translate(2.5rem, -50%);
        }
      }
    `;
  }}
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.25rem;
`;

export const Switch = styled.div<{ $offColor: string; $circleColor: string }>`
  ${({ $offColor, $circleColor }) => {
    return css`
      position: relative;
      width: 4rem;
      height: 1.5rem;
      background: ${$offColor};
      border-radius: 12px;
      transition: 300ms all;

      &:before {
        transition: 300ms all;
        content: '';
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 0.625rem;
        top: 50%;
        left: 0.125rem;
        background: ${$circleColor};
        transform: translate(0, -50%);
      }
    `;
  }}
`;
