import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box p={15} display="flex" justifyContent="space-between">
      <Box>
        <Text fontSize={14}>© 2024 Kevin Roy. All rights reserved.</Text>
      </Box>
      <Box display="flex" gap={15} cursor="pointer">
        <Text fontSize={14} _hover={{ color: 'orange.500' }}>
          About
        </Text>
        <Text fontSize={14} _hover={{ color: 'orange.500' }}>
          Contact
        </Text>
        <Text fontSize={14} _hover={{ color: 'orange.500' }}>
          Privacy Policy
        </Text>
        <Text fontSize={14} _hover={{ color: 'orange.500' }}>
          Terms of Service
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
