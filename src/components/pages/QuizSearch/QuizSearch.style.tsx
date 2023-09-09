import { css, styled } from 'styled-components';

export const SearchQuizWrapper = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  flex: 1;
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
  background: url(/src/assets/icons/PresetSearchIcon.svg);
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
