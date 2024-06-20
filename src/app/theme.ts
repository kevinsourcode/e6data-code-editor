// src/theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  light: {
    background: '#DFE0E1',
    text: '#000',
    description:'#333333',
    codeBackground: '#fffffe'

  },
  dark: {
    background: '#151515',
    text: '#d4d4d4',
    description:'#ffffff',
    codeBackground: '#1e1e1e'
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'light' ? colors.light.background : colors.dark.background,
        // color: props.colorMode === 'light' ? colors.light.text : colors.dark.text,
        codeBackground: props.colorMode === 'light' ? colors.light.codeBackground : colors.dark.codeBackground
      },
    }),
  },
});

export default theme;
