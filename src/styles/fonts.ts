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
    fontSize: 27,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 27}px`,
  },
  [FONT_STYLE_NAME.subtitle1]: {
    fontFamily: 'Gmarketsans',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 24}px`,
  },
  [FONT_STYLE_NAME.subtitle2B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
  },
  [FONT_STYLE_NAME.subtitle2R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
  },
  [FONT_STYLE_NAME.subtitle3]: {
    fontFamily: 'Gmarketsans',
    fontSize: 17,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 17}px`,
  },
  [FONT_STYLE_NAME.body1B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
  },
  [FONT_STYLE_NAME.body1R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
  },
  [FONT_STYLE_NAME.body2B]: {
    fontFamily: 'Gmarketsans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 15}px`,
  },
  [FONT_STYLE_NAME.body2R]: {
    fontFamily: 'Gmarketsans',
    fontSize: 15,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 15}px`,
  },
  [FONT_STYLE_NAME.body3]: {
    fontFamily: 'Gmarketsans',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 13}px`,
  },
  [FONT_STYLE_NAME.caption]: {
    fontFamily: 'Gmarketsans',
    fontSize: 13,
    fontWeight: 300,
    lineHeight: `${LINE_HEIGHT_RATIO * 13}px`,
  },
  [FONT_STYLE_NAME.deco1]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 3.75,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 60}px`,
  },
  [FONT_STYLE_NAME.deco2]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 1.75,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 28}px`,
  },
  [FONT_STYLE_NAME.deco3]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 1.125,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
  },
  [FONT_STYLE_NAME.deco4]: {
    fontFamily: 'NeoDunggeunmoPro',
    fontSize: 0.5,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 8}px`,
  },
};
