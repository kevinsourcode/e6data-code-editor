'use client';

import CodeEditor from '@/components/CodeEditor';
import ProblemStatement from '@/components/ProblemStatement';
import { Box, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Box
        minH="100vh"
        // minW="100vw"
        bg="#0f0a19"
        color="gray.500"
        px={6}
        py={8}
        display="flex"
      >
        <ProblemStatement />
        <Box minW="50%">
          <CodeEditor />
          <Button mt={4} mr={2}>
            Run
          </Button>
          <Button mt={4}>Submit</Button>
        </Box>
      </Box>
    </main>
  );
}
