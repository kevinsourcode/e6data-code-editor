import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" bg="#000" p={15}>
      <Box>
        <Text color="#fff" fontWeight="bold">
          Code Editor
        </Text>
      </Box>
      <Box color="#fff">Toggle</Box>
    </Box>
  );
};

export default Header;
