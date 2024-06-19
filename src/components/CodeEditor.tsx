'use client';

import { Box, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '@/app/constants';
import TestCase from './TestCase';

const CodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [language, setLanguage] = useState('javascript');
  const [value, setValue] = useState('');

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <Box
        w="100%"
        bg="#fff"
        color="#000"
        borderTopRadius={5}
        p={1}
        display="flex"
        alignItems="center"
      >
        <Text>Code</Text>
        {/* <LanguageSelector language={language} onSelect={onSelect} /> */}
      </Box>
      <Editor
        height="80vh"
        theme="vs-dark" //can add button for dark mode.
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        value={value}
        onMount={onMount}
        onChange={(value, event) => {
          setValue(value ?? '');
        }}
        options={{
          fontSize: 16,
        }}
      />
      <TestCase />
    </Box>
  );
};

export default CodeEditor;
