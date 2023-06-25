import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryPurple: string;
      primaryRed: string;
      black: string;
    };
    size: {
      small: '1rem';
      small2: '1.125rem';
      medium: '2rem';
      title: '6rem';
      qCount: '2.625rem';
    };
  }
}
