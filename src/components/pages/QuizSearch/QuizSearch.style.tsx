import { css, styled } from 'styled-components';

import PresetSearchIconUrl from '@/assets/icons/PresetSearchIcon.svg';

export const SearchQuizWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      margin: 3rem 0.25rem 0.25rem;
      padding: 0.75rem;
      flex: 1;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${colors.darkblue500};
        border-radius: 20px;
      }
    `;
  }}
`;

export const SearchForm = styled.form`
  ${({ theme }) => {
    return css`
      height: 3rem;
      padding: 0rem 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      border-radius: 0.5rem;
      border: 0.25rem solid ${theme.colors.gray400};
      background: ${theme.colors.white};
    `;
  }}
`;

export const SearchInput = styled.input`
  ${({ theme }) => {
    return css`
      width: 100%;
      color: ${theme.colors.gray500};
      font-family: ${theme.fonts.deco4.fontFamily};
      font-size: ${theme.fonts.deco4.fontSize};
      font-weight: ${theme.fonts.deco4.fontWeight};
      line-height: normal;
    `;
  }}
`;
export const SearchButton = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  background: url(${PresetSearchIconUrl});
`;

export const QuizPresetWrapper = styled.div`
  margin-top: 2.12rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
`;
export const ObserverTarget = styled.div`
  height: 10rem;
  display: flex;
`;

export const LoadingMessage = styled.p`
  display: flex;
  justify-content: center;
  color: white;
`;
export const QuizPresetCard = styled.div`
  margin-bottom: 1rem;
`;
