import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;

      background: string;
      cardBackground: string;
      title: string;
      welcome: string;
      text: string;

      disabled: string;
    };
  }
}
