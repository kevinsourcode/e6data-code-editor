'use client';

import CodeEditor from '@/components/CodeEditor';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
      </Box>
    </main>
  );
}
