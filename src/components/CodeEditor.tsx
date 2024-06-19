'use client';

import { Box, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '@/app/constants';
import { FaCode } from 'react-icons/fa';

interface EditorProps {
  theme: string;
}

const CodeEditor: React.FC<EditorProps> = ({ theme }) => {
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
        p={2}
        mb={1}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <FaCode />
        <Text>Code</Text>
        {/* <LanguageSelector language={language} onSelect={onSelect} /> */}
      </Box>
      <Editor
        height="45vh"
        theme="vs-dark"
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
