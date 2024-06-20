'use client';

import { Box, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '@/app/constants';
import { FaCode } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';

interface EditorProps {
  //
}

const CodeEditor: React.FC<EditorProps> = () => {
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

  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box
        w="100%"
        color="#000"
        borderTopRadius={5}
        p={2}
        mb={1}
        display="flex"
        alignItems="center"
        gap={2}
        bg={colorMode === 'light' ? '#000' : '#fff'}
      >
        <Box display="flex" justifyContent="space-between" w="100%">
          <Box display="flex" alignItems="center" gap={2}>
            <FaCode color={colorMode === 'light' ? '#fff' : '#000'} />
            <Text color={colorMode === 'light' ? '#fff' : '#000'}>Code</Text>
          </Box>
          <LanguageSelector language={language} onSelect={onSelect} />
        </Box>
      </Box>
      <Editor
        height="45vh"
        theme={colorMode === 'light' ? 'light' : 'vs-dark'}
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        value={value}
        onMount={onMount}
        onChange={(value, event) => {
          setValue(value ?? '');
        }}
        options={{
          fontSize: 15,
        }}
      />
    </Box>
  );
};

export default CodeEditor;
