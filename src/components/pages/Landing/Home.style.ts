import styled, { css } from 'styled-components';

import { ReactComponent as TitleTextSvg } from '@/assets/icons/titleText.svg';
import { ReactComponent as MainImageSvg } from '@/assets/images/mainImage.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(TitleTextSvg)`
  margin: 1.875rem auto 0;
`;

export const PickupText = styled.h2`
  ${({ theme }) => {
    return css`
      margin: 1.75rem auto;

      font-size: 3rem;
      color: ${theme.colors.black};
      text-align: center;
    `;
  }}
`;

export const MainImage = styled(MainImageSvg)`
  ${({ theme }) => {
    return css`
      & > ellipse {
        border: 0.25rem solid ${theme.colors.black};
      }
    `;
  }}
`;

export const CreatePresetBtn = styled.button`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      margin: 1.75rem auto auto;
      padding: 1rem 2.75rem;

      font-size: 1.125rem;
      font-family: 'LOTTERIADDAG';

      &:active {
        text-decoration: none;
      }
    `;
  }}
`;
