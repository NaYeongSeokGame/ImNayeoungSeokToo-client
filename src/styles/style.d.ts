import 'styled-components';

import { COLORS } from './colors';
import { FONT_STYLE_PC } from './fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    fonts: typeof FONT_STYLE_PC;
  }
}
