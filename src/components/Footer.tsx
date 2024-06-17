import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#000" p={15} display="flex" justifyContent="space-between">
      <Box>
        <Text color="#fff" fontSize={14}>
          © 2024 Kevin Roy. All rights reserved.
        </Text>
      </Box>
      <Box display="flex" gap={15} cursor="pointer">
        <Text color="#fff" fontSize={14}>
          About
        </Text>
        <Text color="#fff" fontSize={14}>
          Contact
        </Text>
        <Text color="#fff" fontSize={14}>
          Privacy Policy
        </Text>
        <Text color="#fff" fontSize={14}>
          Terms of Service
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
