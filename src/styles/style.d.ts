import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryPurple: string;
      primaryRed: string;
      black: string;
    };
    size: {};
  }
}
