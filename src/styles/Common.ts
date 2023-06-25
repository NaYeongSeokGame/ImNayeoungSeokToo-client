import { css, styled } from 'styled-components';

export const DefaultButtonStyle = css`
  appearance: initial;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SmallText1 = styled.span`
  font-size: ${({ theme: { size } }) => size.small2};
`;

export const SmallText2 = styled.span`
  font-size: ${({ theme: { size } }) => size.small2};
`;

export const MediumText = styled.span`
  font-size: ${({ theme: { size } }) => size.medium};
`;

export const TitleText = styled.span`
  font-size: ${({ theme: { size } }) => size.title};
`;

export const QCountText = styled.span`
  font-size: ${({ theme: { size } }) => size.qCount};
`;
