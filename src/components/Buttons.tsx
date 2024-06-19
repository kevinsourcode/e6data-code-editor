import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const Buttons = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      mt={8}
      pr={3}
    >
      <Button
        mt={4}
        mr={2}
        bg="orange.500"
        _hover={{ bg: '#1e1e1e', color: '#fff' }}
      >
        Run
      </Button>
      <Button mt={4} bg="green.400">
        Submit
      </Button>
    </Box>
  );
};

export default Buttons;
