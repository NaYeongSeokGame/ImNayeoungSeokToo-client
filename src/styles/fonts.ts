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
    lineHeight: `${LINE_HEIGHT_RATIO * 32}px`,
  },
  [FONT_STYLE_NAME.subtitle1]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1.5,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 24}px`,
  },
  [FONT_STYLE_NAME.subtitle2B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1.25,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
  },
  [FONT_STYLE_NAME.subtitle2R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1.25,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
  },
  [FONT_STYLE_NAME.subtitle3]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1.0625,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 17}px`,
  },
  [FONT_STYLE_NAME.body1B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 1,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
  },
  [FONT_STYLE_NAME.body1R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.75,
    fontWeight: 500,
    lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
  },
  [FONT_STYLE_NAME.body2B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.9375,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 15}px`,
  },
  [FONT_STYLE_NAME.body2R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.75,
    fontWeight: 500,
    lineHeight: `${LINE_HEIGHT_RATIO * 15}px`,
  },
  [FONT_STYLE_NAME.body3]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.75,
    fontWeight: 300,
    lineHeight: `${LINE_HEIGHT_RATIO * 13}px`,
  },
  [FONT_STYLE_NAME.caption]: {
    fontFamily: 'Gmarketsans',
    fontSize: 0.625,
    fontWeight: 300,
    lineHeight: `${LINE_HEIGHT_RATIO * 13}px`,
  },
  [FONT_STYLE_NAME.deco1]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 60,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 60}px`,
  },
  [FONT_STYLE_NAME.deco2]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 28,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 28}px`,
  },
  [FONT_STYLE_NAME.deco3]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
  },
  [FONT_STYLE_NAME.deco4]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 8,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 8}px`,
  },
};
