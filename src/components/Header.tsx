import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Toggle from './ToggleMode';

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bg="#000"
      p={15}
      alignItems="center"
    >
      <Box display="flex" color="#fff" gap={2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <Text
          fontWeight="bold"
          _hover={{ color: 'orange.500' }}
          cursor="pointer"
        >
          E6DATA Code Editor
        </Text>
      </Box>
      <Box color="#fff">
        <Toggle />
      </Box>
    </Box>
  );
};

export default Header;
