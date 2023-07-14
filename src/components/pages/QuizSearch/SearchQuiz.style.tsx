import { css, styled } from 'styled-components';

export const SearchQuizWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: block;
      padding: 1rem;
    `;
  }}
`;

export const SearchForm = styled.form`
  ${({ theme }) => {
    return css`
      height: 3rem;
      padding: 0rem 1.25rem ; 
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
      color: ${theme.colors.gray500};

      font-family: ${theme.fonts.deco4.fontFamily};
      font-size: ${theme.fonts.deco4.fontSize};
      font-weight: ${theme.fonts.deco4.fontWeight};
      line-height: normal;
    `;
  }}
`;
export const SearchButton = styled.button`
  ${({ theme }) => {
    return css`
      width: 1.125rem;
      height: 1.125rem;
      background: url(/src/assets/icons/PresetSearchIcon.svg);
    `;
  }}
`;

export const QuizPresetWrapper = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: 2.12rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      height: 37.25rem; 
      overflow-y: auto;  
    `;
  }}
`;
export const QuizPresetCard= styled.div`
  ${({ theme }) => {
    return css`
      margin-bottom : 1rem;
    `;
  }}
`;
