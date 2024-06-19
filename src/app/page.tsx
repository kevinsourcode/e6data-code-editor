'use client';

import CodeEditor from '@/components/CodeEditor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProblemStatement from '@/components/ProblemStatement';
import { Box } from '@chakra-ui/react';
import Buttons from '@/components/Buttons';
import { Toaster, toast } from 'sonner';
import { useState } from 'react';
import TestCase from '@/components/TestCase';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState('light');
  const [program, setProgram] = useState(false);

  const submitCode = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('Program submitted succesfully!');
      setIsLoading(false);
    }, 2000);
  };

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      toast.success('All test cases passed successfully!');
      setIsRunning(false);
      setProgram(true);
    }, 2000);
  };

  return (
    <main>
      <Header />
      <Toaster position="top-right" richColors closeButton />
      <Box minH="90vh" bg="#000" color="gray.500" display="flex" gap={2} px={3}>
        <ProblemStatement />
        <Box minW="50%" display="flex" flexDirection="column" gap={2}>
          <CodeEditor theme={theme} />
          <TestCase runCode={runCode} program={program} />
          <Buttons
            submitCode={submitCode}
            runCode={runCode}
            isLoading={isLoading}
            isRunning={isRunning}
          />
        </Box>
      </Box>
      <Footer />
    </main>
  );
}
