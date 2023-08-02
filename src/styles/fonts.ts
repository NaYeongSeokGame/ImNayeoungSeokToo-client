export const FONT_STYLE_NAME = {
  title: 'title',
  subtitle1: 'subtitle1',
  subtitle2B: 'subtitle2B',
  subtitle2R: 'subtitle2R',
  subtitle3: 'subtitle3',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body3: 'body3',
  caption: 'caption',
  deco1: 'deco1',
  deco2: 'deco2',
  deco3: 'deco3',
  deco4: 'deco4',
};

export type FontStyleName =
  (typeof FONT_STYLE_NAME)[keyof typeof FONT_STYLE_NAME];

export interface FontStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
}

const LINE_HEIGHT_RATIO = 1.6;

/**
 * PC 버전에 쓰일 font style 상수 모음 (figma 참조)
 */
export const FONT_STYLE_PC: Record<FontStyleName, FontStyle> = {
  [FONT_STYLE_NAME.title]: {
    fontFamily: 'Gmarketsans',
    fontSize: 2,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 2}rem`,
  },
  [FONT_STYLE_NAME.subtitle1]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1.5,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 1.5}rem`,
  },
  [FONT_STYLE_NAME.subtitle2B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1.25,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 1.25}rem`,
  },
  [FONT_STYLE_NAME.subtitle2R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1.25,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 1.25}rem`,
  },
  [FONT_STYLE_NAME.subtitle3]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1.0625,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 1.0625}rem`,
  },
  [FONT_STYLE_NAME.body1B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 1}rem`,
  },
  [FONT_STYLE_NAME.body1R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.75,
    fontWeight: 500,
    lineHeight: `${LINE_HEIGHT_RATIO * 0.75}rem`,
  },
  [FONT_STYLE_NAME.body2B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.9375,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 0.9375}rem`,
  },
  [FONT_STYLE_NAME.body2R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.75,
    fontWeight: 500,
    lineHeight: `${LINE_HEIGHT_RATIO * 0.75}rem`,
  },
  [FONT_STYLE_NAME.body3]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.75,
    fontWeight: 300,
    lineHeight: `${LINE_HEIGHT_RATIO * 0.75}rem`,
  },
  [FONT_STYLE_NAME.caption]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.625,
    fontWeight: 300,
    lineHeight: `${LINE_HEIGHT_RATIO * 0.625}rem`,
  },
  [FONT_STYLE_NAME.deco1]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 3.75,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 3.75}rem`,
  },
  [FONT_STYLE_NAME.deco2]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 1.75,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 1.75}rem`,
  },
  [FONT_STYLE_NAME.deco3]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 0.875,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 1.125}rem`,
  },
  [FONT_STYLE_NAME.deco4]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 0.5,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 0.5}rem`,
  },
};
