import { css, styled } from 'styled-components';

export const DefaultButtonStyle = css`
  appearance: initial;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SmallText1 = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
  font-size: 16px;
`;

export const SmallText2 = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
  font-size: 18px;
`;

export const MediumText = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
  font-size: 32px;
`;

export const TitleText = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
  font-size: 96px;
`;

export const QCountText = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
  font-size: 42px;
`;
