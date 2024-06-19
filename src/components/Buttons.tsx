import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const Buttons = () => {
  return (
    <Box display="flex" justifyContent="end">
      <Button mt={4} mr={2} _hover={{ bg: '#1e1e1e', color: '#fff' }}>
        Run
      </Button>
      <Button mt={4} bg="orange.400">
        Submit
      </Button>
    </Box>
  );
};

export default Buttons;
