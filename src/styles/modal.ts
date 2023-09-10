import { styled } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 13rem;
  padding: 0.9375rem;
  gap: 0.375rem 0;

  display: flex;
  flex-direction: column;

  font-family: 'NeoDunggeunmo Pro';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h4 {
    font-size: 1.875rem;
  }
`;

export const SettingBox = styled.div`
  padding: 22px 0px;
  gap: 0.5625rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h5 {
    font-size: 1.125rem;
  }
`;
