'use client'


import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";


export default function Home() {
  return (
    <main>
      <Box minH="100vh" bg='#0f0a19' color='gray.500' px={6} py={8}>
        hello world
      </Box>
    </main>
  );
}
