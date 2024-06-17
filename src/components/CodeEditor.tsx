'use client';

import { Box } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

const CodeEditor: React.FC = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [value, setValue] = useState('// welcome to the code editor');

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Box>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={value}
        value={value}
        onMount={onMount}
        onChange={(value, event) => {
          setValue(value ?? '');
        }}
      />
    </Box>
  );
};

export default CodeEditor;
