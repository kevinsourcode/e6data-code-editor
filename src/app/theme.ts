// src/theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  light: {
    background: '#ffffff',
    text: '#333333',
    keyword: '#007acc',
    string: '#a31515',
    function: '#795e26',
    comment: '#6a9955',
    number: '#098658',
    operator: '#000000',
    variable: '#001080',
    class: '#267f99',
    gutter: '#f3f3f3',
    lineNumber: '#aaaaaa',
  },
  dark: {
    background: '#1e1e1e',
    text: '#d4d4d4',
    keyword: '#569cd6',
    string: '#ce9178',
    function: '#dcdcaa',
    comment: '#6a9955',
    number: '#b5cea8',
    operator: '#d4d4d4',
    variable: '#9cdcfe',
    class: '#4ec9b0',
    gutter: '#2d2d2d',
    lineNumber: '#858585',
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'light' ? colors.light.background : colors.dark.background,
        color: props.colorMode === 'light' ? colors.light.text : colors.dark.text,
      },
      '.token.keyword': {
        color: props.colorMode === 'light' ? colors.light.keyword : colors.dark.keyword,
      },
      '.token.string': {
        color: props.colorMode === 'light' ? colors.light.string : colors.dark.string,
      },
      '.token.function': {
        color: props.colorMode === 'light' ? colors.light.function : colors.dark.function,
      },
      '.token.comment': {
        color: props.colorMode === 'light' ? colors.light.comment : colors.dark.comment,
      },
      '.token.number': {
        color: props.colorMode === 'light' ? colors.light.number : colors.dark.number,
      },
      '.token.operator': {
        color: props.colorMode === 'light' ? colors.light.operator : colors.dark.operator,
      },
      '.token.variable': {
        color: props.colorMode === 'light' ? colors.light.variable : colors.dark.variable,
      },
      '.token.class, .token.type': {
        color: props.colorMode === 'light' ? colors.light.class : colors.dark.class,
      },
      '.gutter': {
        backgroundColor: props.colorMode === 'light' ? colors.light.gutter : colors.dark.gutter,
        color: props.colorMode === 'light' ? colors.light.lineNumber : colors.dark.lineNumber,
      },
    }),
  },
});

export default theme;
