import styled from '@emotion/styled';
import { COLORS, FONT_STYLE_PC, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 700px;
  margin: auto;

  box-shadow: 0px 0px 5px rgba(165, 165, 165, 0.25);

  @media ${MEDIA_QUERIES.mobile} {
    width: 400px;
  }
`;

export const Header = styled.header`
  height: 60px;
  padding: 14px;

  border-radius: 5px 5px 0px 0px;
  background: ${COLORS.grayscale.white};
`;

export const Title = styled.h5({
  margin: '0px auto',
  textAlign: 'center',

  color: COLORS.grayscale.gray600,
  ...FONT_STYLE_PC.body1B,
});

export const IconWrap = styled.div`
  position: relative;
  top: calc(-100% + 4px);
  left: calc(100% - 24px);
`;

export const Section = styled.section`
  background-color: ${COLORS.grayscale.white};
  border-radius: 0px 0px 5px 5px;
  box-shadow: inset 0px 2px 4px -2px rgba(88, 88, 88, 0.25);
`;
