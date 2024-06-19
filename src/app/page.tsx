'use client';

import CodeEditor from '@/components/CodeEditor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProblemStatement from '@/components/ProblemStatement';
import { Box, Button } from '@chakra-ui/react';
import Buttons from '@/components/Buttons';
import { Toaster, toast } from 'sonner';
import { useState } from 'react';
import TestCase from '@/components/TestCase';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const submitCode = () => {
    console.log('hello');
    // toast('Program submitted succesfully!');
    setIsLoading(true);
    setTimeout(() => {
      toast.success('Program submitted succesfully!');
      setIsLoading(false);
    }, 2000);
  };

  const runCode = () => {};

  return (
    <main>
      <Header />
      <Toaster position="top-right" richColors />
      <Box
        minH="100vh"
        bg="#333333"
        color="gray.500"
        px={6}
        py={8}
        display="flex"
        gap={2}
      >
        <ProblemStatement />
        <Box minW="50%">
          <CodeEditor />
          <Box display="flex" justifyContent="end">
            <Button
              mt={4}
              mr={2}
              _hover={{ bg: '#1e1e1e', color: '#fff' }}
              onClick={runCode}
            >
              Run
            </Button>
            <Button mt={4} bg="orange.400" onClick={submitCode}>
              {isLoading ? 'Submitting..' : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </main>
  );
}
